import Image from "next/image"
import scienceBook from "public/img/adjectives/scienceBook.png"
import { projectsData } from "@/lib/projects"
import GenericButton from "../button"

export default function teamsplate() {
	const teamsplateData = projectsData.teamsplate
	const buttonData = {
		link: teamsplateData.buttonLink,
		text: teamsplateData.buttonText
	}
	return (
		<>
			<div>
				<div className="my-8">
					<p className="my-4">
						Développée avec React-Native pour une diffusion sur iOS et Android,
						Teamsplate s’adresse à tous les clubs sportifs,
						principalement ceux de football dans un premier temps,
						pour réaliser des visuels facilement et rapidement à poster sur les divers réseaux sociaux.
						L’édition des modèles proposés sur l’application a été pensée pour être la plus simple possible,
						afin que l’utilisateur puisse préparer ses posts en amont de l’événement qu’il souhaite couvrir,
						mais qu’il puisse également créer des visuels à la volée pour partager
						les actions instantanément.
					</p>
					<p className="my-4">
						Pour un design simple et épuré, nous avons utilisé Tailwind avec son package tailwind-rn
						qui nous permet de styliser l’application rapidement et simplement.
					</p>
					<p className="my-4">
						Côté API, c’est une API REST avec Nestjs qui a été mise en place,
						une base de données SQL avec PostgreSQL et un serveur Min.io pour
						sauvegarder les visuels générés par l’application.
					</p>
				</div>
				<div>
					<Image src={scienceBook} alt={""} width={500}></Image>
				</div>
				<div className="my-8">
					<div className="my-4">
						<h2 className="text-2xl font-bold">Le processus de création</h2>
						<p>
							Une phase de R&D a été réalisée en amont de la signature du contrat avec le client
							pour vérifier la faisabilité de son projet. La modification d’un SVG en temps réel
							n’avait jamais été faite chez Codekraft, le lead développeur du projet
							s’est donc penché sur le sujet pour préparer le terrain.
						</p>
					</div>
					<div className="my-4">
						<h3 className="text-xl font-bold">Le backend</h3>
						<p>
							Après la signature du contrat et la livraison du cahier des charges par le client,
							j’ai eu carte blanche pour la modélisation de la base de données et la création
							d’une première version de l’API. J’ai d’abord commencé par étudier en profondeur
							le cahier des charges pour comprendre le besoin client, le but final de l’application.
							Avec les données que j’ai récupérées, j’ai pu commencer à réaliser un modèle conceptuel
							de données que j’ai présenté à mes collègues. Après quelques corrections,
							j’ai pu réaliser le modèle physique. Ce modèle a évolué au cours du développement de
							l’application, subissant les changements de direction, les détections de bugs,
							le besoin de nouvelles données ou la suppression de certaines devenues inutiles.
						</p>
					</div>
				</div>
				<div className=" my-4">
					<Image src={scienceBook} alt={""} width={500}></Image>
				</div>
				<div className=" my-4">
					<Image src={scienceBook} alt={""} width={500}></Image>
				</div>
				<div className="my-8">
					<div className="my-4">
						<p>
							Une fois le MPD validé avec l’équipe, j’ai pu attaquer la réalisation des entités dans
							l’API grâce à l’ORM TypeOrm. Puis après cela, j’ai créé les différents fichiers
							dont nous allions avoir besoin pour chaque entité : controller, module repository et
							service avec les fonctions de base et les règles d’API REST.
						</p>
					</div>
					<div className="my-4">
						<h3 className="text-xl font-bold">Le frontend</h3>
						<p>
							Côté frontend, le client nous a fourni des maquettes fonctionnelles et graphiques
							sur lesquelles nous nous sommes appuyés pour réaliser le design.
							J’ai réalisé une grande majorité des écrans de l’application.
							Mon lead dev, travaillant sur d’autres projets en parallèle, me confiait des écrans
							à réaliser avec quelques consignes et les maquettes pour avancer.
							Nous avons remis en cause avec le client certains éléments de la maquette qui
							n’étaient pas réalisables sans passer des heures sur ces derniers,
							ou alors qui altéraient la qualité de l’UX (User Experience).
						</p>
					</div>
				</div>
				<div className=" my-4">
					<Image src={scienceBook} alt={""} width={500}></Image>
				</div>
				<div className="my-8">
					<div className="my-4">
						<h3 className="text-xl font-bold">Le back-office</h3>
						<p>
							Pour avoir une gestion de ses utilisateurs et des packs que le client met à disposition,
							j’ai réalisé un back-office grâce à React-Admin.
						</p>
					</div>
					<div className="my-8">
						<h2 className="text-2xl font-bold">Le résultat final</h2>
						<p>
							Mis en production en novembre 2022, Teamsplate est disponible sur iOS et Android et
							connaît un lancement tranquille mais prometteur. De nouvelles fonctionnalités sont
							déjà en discussion pour faire évoluer l’application et toucher un nouveau public.
						</p>
					</div>
				</div>
				<GenericButton
					buttonData={buttonData}
				/>
			</div>
		</>
	)
}
