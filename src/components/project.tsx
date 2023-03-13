import { projectDetailsInterface } from "@/lib/projects"
import "material-symbols"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "@/styles/animatedProject.module.css"


interface projectInterface {
	projectData: projectDetailsInterface
}

export default function Project({ projectData }: projectInterface) {
	const router = useRouter()

	return (
		<>
			<div className={`
				relative
				w-full
				h-[13em]
				rounded-[20px]
				mb-5
				lg:w-1/4
				lg:h-[80vh]
				lg:rounded-none
				lg:mb-0
				${styles.projectContainer}

			`}>
				<div
					className="
						relative
						w-full
						h-[13em]
						rounded-[20px]
						top-0
						lg:h-[80vh]
						lg:rounded-none
						overflow-hidden
						flex
						items-center
						justify-center
					"
					onClick={() => {
						router.push(`projects/${projectData.link}`)
					}}
				>
					<Image
						src={projectData.preview}
						alt={""}
						className={`
							w-full
							object-cover
							projectImage
							${styles.projectImage}
							duration-300
							ease-in-out`}></Image>
				</div>
				<div
					className="
						absolute
						w-full
						bg-gradient-to-b
						from-transparent
						via-transparent
						to-gray-700
						h-[13em]
						rounded-[20px]
						top-0
						flex
						flex-col
						justify-end
						p-4
						lg:h-[80vh]
						lg:rounded-none
					"
					onClick={() => {
						router.push(`projects/${projectData.link}`)
					}}
				>
					<p className="font-bold text-3xl">{projectData.title}</p>
					<p>{projectData.date}</p>
				</div>

			</div>
		</>
	)
}
