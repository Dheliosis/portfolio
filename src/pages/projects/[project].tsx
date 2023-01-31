import AnimatedBackground from "@/components/animatedBackground"
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
			<AnimatedBackground bgColor={projectData.animatedBgColor}></AnimatedBackground>
			<main className="lg:h-screen lg:flex lg:flex-col lg:justify-center relative z-20">
				<div className="lg:flex lg:justify-around lg:items-center lg:h-fit">
					<div className="lg:h-fit lg:w-fit">
						<h1 className="text-5xl font-bold mt-5 mb-3 lg:w-fit">
							{projectData.title}
						</h1>
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
						<p className="my-5 xl:w-1/2 lg:h-fit lg:mb-16">
							{projectData.description}
						</p>
					</div>
					<Image
						src={projectData.preview}
						width={700}
						height={500}
						alt={projectData.title}
						className="my-10"
					></Image>
				</div>
				<a
					target="_blank"
					href={projectData.buttonLink}
					rel="noreferrer"
				>
					<button className="bg-violet-500 rounded-xl px-5 py-3 text-white font-bold">
						{projectData.buttonText}
					</button>
				</a>
			</main>
		</>
	)
}
