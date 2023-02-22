import sunLandscape from "public/img/adjectives/landscape.png"
import phare from "public/img/adjectives/phare.png"
import scienceBook from "public/img/adjectives/scienceBook.png"
import hand from "public/img/adjectives/hand.png"
import torrent from "public/img/adjectives/torrent.png"

export const adjectives = [
	{
		id: "dynamic",
		title: "Dynamique",
		text: `De l'énergie j'en ai à revendre. Active de nature,
			j'aime bouger mais également me concentrer sur une tâche.`,
		image: torrent,
	},
	{
		id: "jovial",
		title: "Joviale",
		text: "Surnommée \"Smile\" plus jeune, j'ai souvent le sourire aux lèvres et toujours à l'écoute.",
		image: sunLandscape,
	},
	{
		id: "involved",
		title: "Impliquée",
		text: `Je rentre au maximum dans l'univers dans lequel je travaille,
			j'aime connaître le thème du projet et approfondir mes connaissances sur ce dernier.`,
		image: phare,
	},
	{
		id: "curious",
		title: "Curieuse",
		text: "Technologies, sciences, sports, livres, jeux, j'aime découvrir et tester de nouvelles choses.",
		image: scienceBook,
	},
	{
		id: "passionate",
		title: "Passionnée",
		text: `Passionnée de Handball depuis mes 7 ans, entraineuse depuis mes 19 ans.
			Quand j'aime quelque chose je m'y investie.`,
		image: hand,
	},
]
