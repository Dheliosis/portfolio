import Navigation from "./navigation"
import { Montserrat } from "@next/font/google"
const monserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
})

export default function Layout({ children }: any) {
	return (
		<div className={`bg-white min-h-screen ${monserrat.className} pt-8 px-4`}>
			<main>
				<div className=" min-w-screen flex justify-center">
					<Navigation />
				</div>
				{children}
			</main>
		</div>
	)
}
