import teamsplateIcon from "public/img/teamsplate/teamsplate-icon.webp"
import teamsplateLogo from "public/img/teamsplate/teamsplate.webp"
import teamsplatePreview from "public/img/teamsplate/firstPreview.png"
import gyravoIcon from "public/img/gyravo/gyravo-icon.webp"
import gyravoLogo from "public/img/gyravo/gyravo.webp"
import gyravoMockup from "public/img/gyravo/gyravoMockup.png"
import gyravoPreview from "public/img/gyravo/firstPreview.png"
import spaaLogo from "public/img/spaa/spaa.svg"
import spaaMockup from "public/img/spaa/spaaMockup.png"
import spaaPreview from "public/img/spaa/firstPreview.png"
import shakeLogo from "public/img/shake/shake.webp"
import shakeIcon from "public/img/shake/shake-icon.png"
import shakeMockup from "public/img/shake/mockup_preview_shake.png"
import shakePreview from "public/img/shake/firstPreview.png"
import myStudentProjectLogo from "public/img/myStudentProject/myStudentProject.webp"
import myStudentProjectIcon from "public/img/myStudentProject/myStudentProject-icon.webp"
import myStudentProjectPreview from "public/img/myStudentProject/firstPreview.png"
import appscriptLogo from "public/img/appscript/appscript.png"
import e2eIcon from "public/img/e2e/e2e-icon.jpg"
import portfolioLogo from "public/img/portfolio/carolineFassot.png"

export interface projectsDataInterface {
	[projectName: string]: projectDetailsInterface
}

export interface projectDetailsInterface {
	title: string
	description: string
	date: string
	icon: any
	logo: any
	mockup: any
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
	reactjs: {
		title: "React.js",
		bgColor: "bg-[#61DBFB]",
		textColor: "text-black",
	},
	reactNative: {
		title: "React-Native",
		bgColor: "bg-[#61DBFB]",
		textColor: "text-black",
	},
	reactAdmin: {
		title: "React-Admin",
		bgColor: "bg-[#61DBFB]",
		textColor: "text-black",
	},
	vuejs: {
		title: "Vue.js",
		bgColor: "bg-[#41B883]",
		textColor: "text-black",
	},
	nuxtjs: {
		title: "Nuxt.js",
		bgColor: "bg-[#00DC82]",
		textColor: "text-black",
	},
	nestjs: {
		title: "Nest.js",
		bgColor: "bg-[#E0234E]",
		textColor: "text-white",
	},
	expressjs: {
		title: "Express",
		bgColor: "bg-[#353535]",
		textColor: "text-white",
	},
	postgres: {
		title: "PostgreSQL",
		bgColor: "bg-[#316192]",
		textColor: "text-white",
	},
	mariadb: {
		title: "MariaDB",
		bgColor: "bg-[#C0765A]",
		textColor: "text-black",
	},
	tailwind: {
		title: "Tailwindcss",
		bgColor: "bg-[#36B7F0]",
		textColor: "text-black",
	},
	bootstrap: {
		title: "Bootstrap",
		bgColor: "bg-[#6C10F3]",
		textColor: "text-white",
	},
	typescript: {
		title: "Typescript",
		bgColor: "bg-[#2364C9]",
		textColor: "text-white",
	},
	googlescript:{
		title: "Google Script",
		bgColor: "bg-[#F70028]",
		textColor: "text-black",
	},
	cucumber:{
		title: "Cucumber",
		bgColor: "bg-[#00ED66]",
		textColor: "text-black",
	},
	playwright:{
		title: "Playwright",
		bgColor: "bg-[#E63C43]",
		textColor: "text-black",
	},
}

export const projectsData: projectsDataInterface = {
	portfolio:{
		title: "Portfolio",
		description:
			`Le site que vous êtes actuellement en train de consulter. Je vous présente à travers ces quelques pages
			mon travail, mes projets et une partie de moi.`,
		date: "Janvier 2023 ↣ Mars 2023",
		icon: portfolioLogo,
		logo: portfolioLogo,
		mockup: teamsplatePreview,
		preview: teamsplatePreview,
		stack: [
			technos.reactjs,
			technos.tailwind,
		],
		link: "portfolio",
		buttonText: "Voir le dépot",
		buttonLink:
			"https://github.com/Dheliosis/portfolio",
		animatedBgColor: "bg-[#00E8D6]",
	},
	e2e:{
		title: "Tests End-to-End",
		description:
			`Création de tests End-to-End sur des projets réalisés par l'entreprise Codekraft,
			avec la mise en place de dépôts Git pour chaque projet depuis un dépôt général et la mise en oeuvre
			de Continuous Integration/Continuous Delivery (CI/CD) GitLab.`,
		date: "Février 2022 ↣ Mars 2023",
		icon: e2eIcon,
		logo: appscriptLogo,
		mockup: teamsplatePreview,
		preview: teamsplatePreview,
		stack: [
			technos.cucumber,
			technos.playwright,
			technos.typescript
		],
		link: "e2e",
		buttonText: "Voir comment montrer le code",
		buttonLink:
			"https://play.google.com/store/apps/details?id=com.jaddloMobile",
		animatedBgColor: "bg-[#00ED66]",
	},
	gap:{
		title: "Google AppScript",
		description:
			`Le projet Appscript a été réalisé pour simplifier le travail de l'équipe de gestion de projet
			sur le sujet de la planification des temps de l'équipe de Codekraft.
			L'objectif était de récupérer les temps renseignés par les salariés
			sur la plateforme Gryzzly avec l'api fournie et de les renseigner dans un spreadsheet.`,
		date: "Novembre 2022 ↣ Janvier 2023",
		icon: appscriptLogo,
		logo: appscriptLogo,
		mockup: teamsplatePreview,
		preview: teamsplatePreview,
		stack: [
			technos.googlescript
		],
		link: "gap",
		buttonText: "Voir comment montrer le code",
		buttonLink:
			"https://play.google.com/store/apps/details?id=com.jaddloMobile",
		animatedBgColor: "bg-[#F70028]",
	},
	teamsplate: {
		title: "Teamsplate",
		description:
			`Teamsplate est une application mobile imaginée par Jaddlo et développée par Codekraft.
			Elle permet aux clubs amateurs de créer facilement et rapidement des visuels pour animer
			leurs réseaux sociaux grâce à des modèles spécifiques entièrement personnalisables.`,
		date: "Mai 2022 ↣ Novembre 2022",
		icon: teamsplateIcon,
		logo: teamsplateLogo,
		mockup: teamsplatePreview,
		preview: teamsplatePreview,
		stack: [
			technos.reactNative,
			technos.typescript,
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
		description:
			`GY.RA.VO., acronyme de Gymnastique Rabelaisienne Volontaire, est une association de gymnastique volontaire
			dépendante de la FFEGV. L'association souhaitait une refonte intégrale de son site internet.
			Dans le cadre d'un projet d'école avec des camarades, nous avons monté tout un projet de refonte
			de l'univers de marque, de la communication et du site internet de l'association.`,
		date: "Décembre 2021 ↣ Juillet 2022",
		icon: gyravoIcon,
		logo: gyravoLogo,
		mockup: gyravoMockup,
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
		description:
			`La Société de Protection des Animaux Autonome de Maine et Loire possède un site internet obselète.
			Dans le cadre de partiel nous avons entrepris avec des camarades la refonte intégrale du site internet.`,
		date: "28 Juin 2021 ↣ 9 Juillet 2021",
		icon: spaaLogo,
		logo: spaaLogo,
		mockup: spaaMockup,
		preview: spaaPreview,
		stack: [technos.vuejs, technos.bootstrap],
		link: "spaa",
		buttonText: "Voir le site web",
		buttonLink: "https://spaa-angers.netlify.app",
		animatedBgColor: "bg-[#EC6608]",
	},
	shake: {
		title: "Shake",
		description:
			`Shake est un site internet de recettes de cocktails. L'utilisateur peut rechercher une recette qu'il
			souhaite réaliser, alors les ingrédients et les étapes de la préparation lui sont proposés pour une
			réalisation simple et rapide. De plus l'utilisateur peut également renseigner les ingrédients qu'il
			possède chez lui et le site lui propose des recettes réalisables avec ce qu'il dispose.`,
		date: "22 Février 2021 ↣ 26 Février 2021",
		icon: shakeIcon,
		logo: shakeLogo,
		mockup: shakeMockup,
		preview: shakePreview,
		stack: [technos.vuejs, technos.bootstrap],
		link: "shake",
		buttonText: "Voir le site web",
		buttonLink: "https://shake-mds.netlify.app",
		animatedBgColor: "bg-[#EFA61B]",
	},
	myStudentProject: {
		title: "MyStudentProject",
		description:
			// eslint-disable-next-line max-len
			`MyStudentProject est un site vitrine des projets réalisés au sein de MyDigitalSchool.
			Durant une semaine de projets, avec des camarades, nous avons créés ce site dont
			l'objectif était de travailler l'accessibilité maximale du site.`,
		date: "30 Novembre 2020 ↣ 7 Décembre 2020",
		icon: myStudentProjectIcon,
		logo: myStudentProjectLogo,
		mockup: myStudentProjectPreview,
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
				project: "e2e",
			},
		},
		{
			params: {
				project: "portfolio",
			},
		},
		{
			params: {
				project: "gap",
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

export function getHomeProjectsDetails() {
	return [
		projectsData.teamsplate,
		projectsData.e2e,
		projectsData.gap,
		projectsData.gyravo,
	]
}

export async function getProjectDetails(
	projectName: string
): Promise<projectDetailsInterface> {
	return projectsData[projectName]
}
