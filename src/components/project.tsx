import { projectDetailsInterface } from "@/lib/projects"
import "material-symbols"
import Image from "next/image"
import { useRouter } from "next/router"

interface projectInterface {
	projectData: projectDetailsInterface
}

export default function Project({ projectData }: projectInterface) {
	const router = useRouter()

	return (
		<>
			<div
				className={`
				h-60
				w-40
				lg:h-96
				lg:w-72
				rounded-2xl
				flex
				flex-col
				items-center
				relative
				bg-gradient-to-b
				${projectData.bgColorGradient}
				my-10
				mx-2
			`}
			>
				<h2 className="pt-4">{projectData.title}</h2>
				<div className="h-full flex items-center justify-center">
					<Image
						src={projectData.icon}
						width={110}
						height={100}
						alt={projectData.title}
						className="mb-16 flex justify-center items-center"
					></Image>
				</div>
				<button
					className={`
						bg-[#F9EAED]
						w-2/3
						h-1/6
						rounded-3xl
						flex
						justify-center
						items-center
						absolute
						-bottom-5
					`}
					onClick={() => {
						router.push(`projects/${projectData.link}`)
					}}
				>
					<span className="material-symbols-outlined text-3xl">visibility</span>
				</button>
			</div>
		</>
	)
}
