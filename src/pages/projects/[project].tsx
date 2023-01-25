import {
	getProjectDetails,
	getProjectIdList,
	technoDetailsInterface,
} from "@/lib/projects"
import Image from "next/image"

export async function getStaticPaths() {
	const paths = await getProjectIdList()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }: any) {
	const projectData = await getProjectDetails(params.project)
	return {
		props: {
			projectData,
		},
	}
}

export default function Project({ projectData }: any) {
	return (
		<>
			<div>
				<h1 className="text-5xl font-bold mt-5 mb-3">{projectData.title}</h1>
				<div className="flex flex-wrap">
					{projectData.stack.map((techno: technoDetailsInterface) => (
						<p
							className={`
								rounded-3xl
								w-fit
								px-5
								py-1
								mr-4
								my-1
								${techno.bgColor}
								text-${techno.textColor}
								font-bold
							`}
							key={techno.title}
						>
							{techno.title}
						</p>
					))}
				</div>
				<p className="my-5">{projectData.description}</p>
				<Image
					src={projectData.image}
					width={500}
					height={500}
					alt={projectData.title}
					className="my-10"
				></Image>
				<a target="_blank" href={projectData.buttonLink} rel="noreferrer">
					<button className="bg-violet-500 rounded-xl px-5 py-3 text-white font-bold">
						{projectData.buttonText}
					</button>
				</a>
			</div>
		</>
	)
}
