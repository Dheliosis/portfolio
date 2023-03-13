import AnimatedBackground from "@/components/animatedBackground"
import {
	getProjectDetails,
	getProjectIdList,
	technoDetailsInterface,
} from "@/lib/projects"
import Image from "next/image"
import { lazy, Suspense } from "react"

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
	const MyComponent = lazy(() => import(`@/components/projects/${projectData.link}`))
	return (
		<>
			<AnimatedBackground
				bgColor={projectData.animatedBgColor}
			></AnimatedBackground>
			<main className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center relative z-20">
				<div className="px-4 lg:flex lg:justify-around lg:items-center lg:h-screen lg:px-60">
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
										${techno.textColor}
										font-bold
									`}
									key={techno.title}
								>
									{techno.title}
								</p>
							))}
						</div>
						<p className="my-5 lg:h-fit lg:mb-16">
							{projectData.description}
						</p>
						<a target="_blank" href={projectData.buttonLink} rel="noreferrer">
							<button className="bg-violet-500 rounded-xl px-5 py-3 text-white font-bold">
								{projectData.buttonText}
							</button>
						</a>
					</div>
					<Image
						src={projectData.mockup}
						alt={projectData.title}
						className="my-10"
						width={500}
					></Image>
				</div>
				<div className="px-4 lg:px-60">
					<Suspense fallback={<div>Loading...</div>}>
						<MyComponent></MyComponent>
					</Suspense>
				</div>
			</main>
		</>
	)
}
