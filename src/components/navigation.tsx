"use client"
import "material-symbols"
import { useState } from "react"
import { useRouter } from "next/router"

const Navigation = () => {
	const router = useRouter()

	const navigatorTab = [
		{
			name: "Home",
			icon: "waving_hand",
			link: "/",
		},
		{
			name: "Projects",
			icon: "code",
			link: "/projects",
		},
		{
			name: "Studies and Works",
			icon: "work_history",
			link: "/",
		},
		{
			name: "Contact",
			icon: "message",
			link: "/",
		},
	]

	const [activeTabNavigator, setActiveTabNavigator] = useState(
		navigatorTab[0].name
	)

	return (
		<nav className="bg-white w-3/4 rounded-3xl pt-4 pb-2 px-4 absolute bottom-4 shadow-md">
			<div className="flex justify-around">
				{navigatorTab.map((tab) => (
					<button
						onClick={() => {
							setActiveTabNavigator(tab.name)
							router.push(tab.link)
						}}
						key={tab.name}
						className="flex flex-col items-center"
					>
						<span
							className={`material-symbols-outlined text-3xl ${
								activeTabNavigator === tab.name
									? "text-primary-blue"
									: "text-secondary-blue"
							}`}
						>
							{tab.icon}
						</span>
						{activeTabNavigator === tab.name ? (
							<span className="rounded-full bg-primary-blue w-2 h-2 mt-2"></span>
						) : null}
					</button>
				))}
			</div>
		</nav>
	)
}

export default Navigation
