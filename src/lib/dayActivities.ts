import programmer from "public/img/weekActivities/programmeur.png"
import coach from "public/img/weekActivities/coach.png"
import hand from "public/img/weekActivities/handball.png"
import bed from "public/img/weekActivities/lit.png"
import eat from "public/img/weekActivities/woman.png"
import tent from "public/img/weekActivities/camping-tent.png"
import morning from "public/img/weekActivities/morning.png"
import education from "public/img/weekActivities/education.png"


export interface activityInterface {
	description : string
	icon: any
}

interface dayActivitiesInterface {
	[activityName: string]: activityInterface
}

export const dayActivities: dayActivitiesInterface = {
	work: {
		description: " Je travaille, la tête plongée dans des lignes de code.",
		icon: programmer,
	},
	morningRouting: {
		description: "Il est l'heure de se préparer pour la journée.",
		icon: morning,
	},
	sleep: {
		description: " Au vu de l'heure, je dors.",
		icon: bed,
	},
	endOfDay: {
		description:
			"C'est le moment de lancer la console, prendre un livre ou de voir des gens.",
		icon: education,
	},

	meal: {
		description: " Le midi c'est sacré, je prends mon déjeuner.",
		icon: eat,
	},
	hand: {
		description:
			"Je suis actuellement en train de m'entrainer sur un terrain de hand.",
		icon: hand,
	},
	handMatch: {
		description: "Surement partie faire un match de hand.",
		icon: hand,
	},
	handGirls: {
		description:
			"En train d'entrainer des enfants au handball et de leur faire découvrir les joies de ce sport",
		icon: coach,
	},

	other: {
		description: "Oula ça peut être beaucoup de chose différentes.",
		icon: tent,
	},
}
