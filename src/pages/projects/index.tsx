import Project from "@/components/project"
import teamsplate from "public/teamsplate.png"
import shake from "public/shake.png"
import gyravo from "public/gyravo.png"
import spaa from "public/spaa.svg"


export default function Projects() {
	return (
		<main className="flex flex-col justify-between items-center">
			<h1 className="text-3xl font-bold">Projets</h1>
			<div className="flex flex-wrap justify-around">
				<div>
					<Project bgColorGradient={"from-blue-300"} image={teamsplate} projectName={"Teamsplate"} />
					<Project bgColorGradient={"from-orange-200"} image={spaa} projectName={"SPAA"} />
				</div>
				<div className="mt-20">
					<Project bgColorGradient={"from-orange-800"} image={shake} projectName={"Shake"} />
					<Project bgColorGradient={"from-green-200"} image={gyravo} projectName={"Gyravo"} />
				</div>
			</div>
		</main>
	)
}
