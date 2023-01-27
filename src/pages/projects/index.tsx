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
		<main className="flex flex-col justify-between items-center">
			<h1 className="text-6xl font-bold">Projets</h1>
			{Object.keys(projectsData).length < 1 ? (
				<></>
			) : (
				<div className="flex flex-wrap justify-around">
					<div>
						<Project projectData={projectsData.teamsplate} />
						<Project projectData={projectsData.spaa} />
						<Project projectData={projectsData.myStudentProject} />
					</div>
					<div className="mt-20 lg:mt-0">
						<Project projectData={projectsData.gyravo} />
						<Project projectData={projectsData.shake} />
					</div>
				</div>
			)}
		</main>
	)
}
