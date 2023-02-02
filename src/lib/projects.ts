import teamsplateIcon from "public/img/teamsplate/teamsplate-icon.webp"
import teamsplateLogo from "public/img/teamsplate/teamsplate.webp"
import teamsplatePreview from "public/img/teamsplate/firstPreview.png"
import gyravoIcon from "public/img/gyravo/gyravo-icon.webp"
import gyravoLogo from "public/img/gyravo/gyravo.webp"
import gyravoPreview from "public/img/gyravo/firstPreview.png"
import spaaLogo from "public/img/spaa/spaa.svg"
import spaaPreview from "public/img/spaa/firstPreview.png"
import shakeLogo from "public/img/shake/shake.webp"
import shakePreview from "public/img/shake/mockup_preview_shake.png"
import myStudentProjectLogo from "public/img/myStudentProject/myStudentProject.webp"
import myStudentProjectIcon from "public/img/myStudentProject/myStudentProject-icon.webp"
import myStudentProjectPreview from "public/img/myStudentProject/firstPreview.png"

export interface projectsDataInterface {
	[projectName: string]: projectDetailsInterface
}

export interface projectDetailsInterface {
	title: string
	bgColorGradient: string
	description: string
	date: string
	icon: any
	logo: any
	preview: any
	stack: Array<technoDetailsInterface>
	link: string
	buttonText: string
	buttonLink: string
	animatedBgColor: string
}

interface technoInterface {
	[techno: string]: technoDetailsInterface
}

export interface technoDetailsInterface {
	title: string
	bgColor: string
	textColor: string
}

const technos: technoInterface = {
	reactNative: {
		title: "React-Native",
		bgColor: "bg-[#61DBFB]",
		textColor: "black",
	},
	reactAdmin: {
		title: "React-Admin",
		bgColor: "bg-[#61DBFB]",
		textColor: "black",
	},
	vuejs: {
		title: "Vue.js",
		bgColor: "bg-[#41B883]",
		textColor: "white",
	},
	nuxtjs: {
		title: "Nuxt.js",
		bgColor: "bg-[#00DC82]",
		textColor: "white",
	},
	nestjs: {
		title: "Nest.js",
		bgColor: "bg-[#E0234E]",
		textColor: "white",
	},
	expressjs: {
		title: "Express",
		bgColor: "bg-[#353535]",
		textColor: "white",
	},
	postgres: {
		title: "PostgreSQL",
		bgColor: "bg-[#316192]",
		textColor: "white",
	},
	mariadb: {
		title: "MariaDB",
		bgColor: "bg-[#C0765A]",
		textColor: "white",
	},
	tailwind: {
		title: "Tailwindcss",
		bgColor: "bg-[#36B7F0]",
		textColor: "white",
	},
	bootstrap: {
		title: "Bootstrap",
		bgColor: "bg-[#6C10F3]",
		textColor: "white",
	},
}

const projectsData: projectsDataInterface = {
	teamsplate: {
		title: "Teamsplate",
		bgColorGradient: "from-blue-300",
		description:
			// eslint-disable-next-line max-len
			"Teamsplate est une application mobile, imaginée par Jaddlo, développée par Codekraft, qui permet aux clubs amateurs de créer facilement et rapidement des visuels pour animer leurs réseaux sociaux grâce à des modèles spécifiques entièrement personnalisables.",
		date: "main 2022 -> novembre 2022",
		icon: teamsplateIcon,
		logo: teamsplateLogo,
		preview: teamsplatePreview,
		stack: [
			technos.reactNative,
			technos.tailwind,
			technos.reactAdmin,
			technos.nestjs,
			technos.postgres,
		],
		link: "teamsplate",
		buttonText: "Voir l'application",
		buttonLink:
			"https://play.google.com/store/apps/details?id=com.jaddloMobile",
		animatedBgColor: "bg-[#0161FB]",
	},
	gyravo: {
		title: "GY.RA.VO.",
		bgColorGradient: "from-green-200",
		description:
			// eslint-disable-next-line max-len
			"GY.RA.VO. acronyme de Gymnastique Rabelaisienne Volontaire et une association de gymnastique volontaire dépendante de la FFEGV. L'association voulait une refonte intégralle de leur site internet. Dans le contexte d'un projet d'école avec des camarades, nous avons monté tout un projet de refonte de l'univers de marque, de la communication et du site internet de l'association.",
		date: "decembre 2021 -> juillet 2022",
		icon: gyravoIcon,
		logo: gyravoLogo,
		preview: gyravoPreview,
		stack: [
			technos.nuxtjs,
			technos.tailwind,
			technos.expressjs,
			technos.mariadb,
		],
		link: "gyravo",
		buttonText: "Voir le site web",
		buttonLink: "https://gyravo.netlify.app",
		animatedBgColor: "bg-[#0BB755]",
	},
	spaa: {
		title: "SPAA",
		bgColorGradient: "from-orange-200",
		description:
			// eslint-disable-next-line max-len
			"La Société de Protection des Animaux Autonome de Maine et Loire possède un site internet obselète. Dans le cadre de partiel nous avons entrepris avec des camarades la refonte intégrale du site internet.",
		date: "28 juin 2021 -> 9 juillet 2021",
		icon: spaaLogo,
		logo: spaaLogo,
		preview: spaaPreview,
		stack: [technos.vuejs, technos.bootstrap],
		link: "spaa",
		buttonText: "Voir le site web",
		buttonLink: "https://spaa-angers.netlify.app",
		animatedBgColor: "bg-[#EC6608]",
	},
	shake: {
		title: "Shake",
		bgColorGradient: "from-orange-800",
		description:
			// eslint-disable-next-line max-len
			"Shake est un site internet de recettes de cocktails. L'utilisateur peut rechercher une recette qu'il souhaite réaliser, alors les ingrédients et les étapes de la préparation lui sont proposés pour une réalisation simple et rapide. De plus l'utilisateur peut également renseigner les ingrédients qu'il possède chez lui et le site lui propose des recettes réalisables avec ce qu'il dispose.",
		date: "22 février 2021 -> 26 février 2021",
		icon: shakeLogo,
		logo: shakeLogo,
		preview: shakePreview,
		stack: [technos.vuejs, technos.bootstrap],
		link: "shake",
		buttonText: "Voir le site web",
		buttonLink: "https://shake-mds.netlify.app",
		animatedBgColor: "bg-[#EFA61B]",
	},
	myStudentProject: {
		title: "MyStudentProject",
		bgColorGradient: "from-cyan-200",
		description:
			// eslint-disable-next-line max-len
			"MyStudentProject est un site vitrine des projets réalisés au sein de MyDigitalSchool. Durant une semaine de projets, avec des camarades, nous avons créés ce site dont l'objectif était de travailler l'accessibilité maximale du site.",
		date: "30 novembre 2020 -> 7 décembre 2020",
		icon: myStudentProjectIcon,
		logo: myStudentProjectLogo,
		preview: myStudentProjectPreview,
		stack: [technos.vuejs, technos.bootstrap],
		link: "myStudentProject",
		buttonText: "Voir le site web",
		buttonLink: "https://mystudentproject.netlify.app",
		animatedBgColor: "bg-[#2DABD0]",
	},
}

export async function getProjectIdList() {
	return [
		{
			params: {
				project: "teamsplate",
			},
		},
		{
			params: {
				project: "gyravo",
			},
		},
		{
			params: {
				project: "spaa",
			},
		},
		{
			params: {
				project: "shake",
			},
		},
		{
			params: {
				project: "myStudentProject",
			},
		},
	]
}

export function getAllProjectsDetails() {
	return projectsData
}

export async function getProjectDetails(
	projectName: string
): Promise<projectDetailsInterface> {
	return projectsData[projectName]
}
