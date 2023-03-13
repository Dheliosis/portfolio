import Image from "next/image"
import phare from "public/img/adjectives/phare.png"
import GenericButton from "../button"

export default function teamsplate() {
	const projectTeam = [
		{
			name: "Chiara Davis",
			role: "Web Designeuse",
			link: ""
		},
		{
			name: "Lucie Manetti",
			role: "E-business",
			link: ""
		},
		{
			name: "Camille Renard",
			role: "Web Marketing",
			link: ""
		},
		{
			name: "Pauline Rouable",
			role: "E-business",
			link: ""
		},
		{
			name: "Et moi-même, Caroline Fassot",
			role: "Développeuse et Cheffe de projet",
			link: ""
		},
	]

	const gitHubFrontButton = {
		text: "Github Front",
		link: ""
	}
	const gitHubBackButton = {
		text: "Github Back",
		link: ""
	}
	const projectFileButton = {
		text: "Fichier du projet",
		link: ""
	}


	return (
		<>
			<div>
				<div className="my-8">
					<p>Pour ce projet, nous étions une équipe de 5 personnes :</p>
					<ul className="list-disc ml-4">
						{projectTeam.map(teammate => (
							<li key={teammate.name}>
								<a href={teammate.link} target="_blank" rel="noreferrer">
									{teammate.name}, {teammate.role}
								</a>
							</li>

						))}
					</ul>
					<p className="my-4">
						Nous nous retrouvions les jeudis toutes les 3 semaines, suivant notre rythme de semaine de cours, pour avancer sur le projet. En fin d'année, un dossier de projet devrait être rendu au jury et une épreuve orale d'une heure a eu lieu.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-2xl font-bold">Le contexte</h2>
					<p>
						Ce projet s'inscrit dans le cadre du MyDigitalProject porté par MyDigitalSchool. Le but est de réaliser un projet concret en partant d'une idée travaillée ou d'un client réel. Pour notre cas, se fut un client réel.
					</p>
				</div>
				<div className=" my-4">
					<Image src={phare} alt={""} width={500}></Image>
				</div>
				<div className="my-8">
					<div className="my-4">
						<h3 className="text-xl font-bold">Le site web</h3>
						<p>
							Le projet prend racine dans une association en plein développement. L'objectif était de digitaliser le côté administratif de l'association en permettant à chacun d'avoir un espace personnel pour gérer ses documents et ses inscriptions aux cours. De plus, il permet aux membres du bureau d'avoir une vue d'ensemble des adhérents de l'association à un seul et même endroit. Tout est centralisé pour une meilleure organisation interne et externe. Le projet se présente comme un site web vitrine pour les visiteurs ponctuels, et dévoile toute une partie « espace personnel » pour les adhérents de l'association et enfin une partie gestion, administration, pour les membres du bureau.
						</p>
					</div>
					<div className="my-4">
						<h3 className="text-xl font-bold">La communication</h3>
						<p>
							Pour la partie communication de l'association, une page Facebook a été créée pour des communications moins officielles que celles qui sont disponibles dans la partie blog du site web. Une chaîne YouTube partage également avec les licenciés des cours en ligne lors des périodes de confinement ou encore à leur bon vouloir de pratiquer une activité physique chez eux.
						</p>
					</div>
					<div className="my-4">
						<h3 className="text-xl font-bold">L'identité de marque</h3>
						<p>
							Pour ce nouveau départ sur la sphère numérique, l'association a voulu harmoniser tous ses contenus, qu'ils soient digitaux ou imprimés. Toute l'identité de marque était à refaire, en passant par l'univers graphique et celui de la communication. Des affiches imprimées ont donc été réalisée pour les distribuer et les placarder aux alentours de la ville de Chinon, et des posts réguliers de mi-août jusqu'à mi-septembre ont été rédigé pour attirer de nouveaux membres
						</p>
					</div>
				</div>
				<div className=" my-4">
					<Image src={phare} alt={""} width={500}></Image>
				</div>
				<div className="my-8">
					<div className="my-4">
						<h2 className="text-2xl font-bold">Mon rôle</h2>
						<h3 className="text-xl font-bold">La chefferie de projet</h3>
						<p>
							En tant que cheffe de projet, j'ai participé à une réunion avec les clients pour mieux comprendre leurs besoins. De cette réunion, j'ai pu rédiger un brief pour mon équipe et, avec leur aide, j'ai dressé un cahier des charges. J'ai pu animer de rapides réunions de mise au point chaque fois que nous nous retrouvions pour savoir qui faisait quoi. En fin de projet, j'ai rédigé un procès-verbal de recettage validé avec le client.
						</p>
					</div>
					<div className="my-4">
						<h3 className="text-xl font-bold">La développement</h3>
						<p>
							Côté développement, je suis partie sur une base de données SQL avec MariaDB, un backend avec ExpressJs et un frontend avec Nuxtjs et Tailwindcss. J'ai d'abord commencé par modéliser la base de données en réalisant un modèle conceptuel de données, puis un modèle physique de données. J'ai ensuite créé l'API en suivant le style REST et en découpant mes fichiers en routers, controllers et services. Enfin, je me suis lancée sur le développement du frontend en suivant le principe d'Atomic design.
						</p>
					</div>
				</div>
				<div className="flex justify-between">
					<GenericButton buttonData={gitHubFrontButton}></GenericButton>
					<GenericButton buttonData={gitHubBackButton}></GenericButton>
				</div>
				<div className=" my-4">
					<Image src={phare} alt={""} width={500}></Image>
				</div>
				<div className=" my-4">
					<Image src={phare} alt={""} width={500}></Image>
				</div>
				<div className=" my-4">
					<Image src={phare} alt={""} width={500}></Image>
				</div>
				<div className="my-8">
					<div className="my-4">
						<h2 className="text-2xl font-bold">Mon rôle</h2>
						<p>Arrivée à la deadline des rendus et de la présentation orale, nous avions :</p>
						<ul className="list-disc ml-4">
							<li>côté marketing et communication :</li>
							<ul className="list-disc ml-4">
								<li>une étude de marché</li>
								<li>une analyse concurrentielle</li>
								<li>une approche webmarketing et social media</li>
							</ul>
							<li>côté design :</li>
							<ul className="list-disc ml-4">
								<li>une charte graphique</li>
								<li>une approche graphique web et print</li>
								<li>des maquettes</li>
							</ul>
							<li>côté développement :</li>
							<ul className="list-disc ml-4">
								<li>une approche technique</li>
								<li>un frontend</li>
								<li>un backend</li>
								<li>une base de données</li>
							</ul>
						</ul>
						<p className="py-4">
							Si vous souhaitez en savoir plus sur ce projet, vous pouvez consulter le fichier de rendu !
						</p>
						<GenericButton buttonData={projectFileButton}></GenericButton>

					</div>
				</div>
			</div>
		</>
	)
}
