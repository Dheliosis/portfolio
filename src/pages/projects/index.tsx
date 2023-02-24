import Project from "@/components/project"
import { useEffect, useState } from "react"
import { getAllProjectsDetails, projectsDataInterface } from "@/lib/projects"

export default function Projects() {
	const [projectsData, setProjectData] = useState({})

	useEffect(() => {
		const projectDetails: projectsDataInterface = getAllProjectsDetails()
		setProjectData(projectDetails)
	}, [])

	return (
		<main className="flex flex-col justify-between px-4">
			<h1 className="text-5xl font-bold mb-10">Mes projets</h1>
			{Object.keys(projectsData).length < 1 ? (
				<></>
			) : (
				<div className="flex flex-col items-center">
					<div className="w-full lg:flex lg:overflow-auto">
						{Object.keys(projectsData).map((key: string) => (
							<Project key={key} projectData={projectsData[key]} />
						))}
					</div>
				</div>
			)}
		</main>
	)
}
