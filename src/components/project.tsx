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
			<div className="relative w-full bg-slate-200 h-[13em] rounded-[20px] mb-5">
				<div
					className="
						absolute
						w-full
						h-[13em]
						rounded-[20px]
						top-0
					"
					onClick={() => {
						router.push(`projects/${projectData.link}`)
					}}
				>
				</div>
				<div
					className="
						absolute
						w-full
						bg-gradient-to-b
						from-transparent
						to-slate-500
						h-[13em]
						rounded-[20px]
						top-0
						flex
						flex-col
						justify-end
						p-4
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
