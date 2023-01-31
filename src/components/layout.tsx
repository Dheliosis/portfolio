import Navigation from "./navigation"
import { Montserrat } from "@next/font/google"
const monserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
})

export default function Layout({ children }: any) {
	return (
		<div className={`bg-[#000916] min-h-screen ${monserrat.className} pt-8 min-w-screen text-white`}>
			<main className="min-h-screen">
				<div className=" min-w-screen flex justify-center">
					<Navigation />
				</div>
				<div className="pb-36 min-h-screen w-full">{children}</div>
			</main>
		</div>
	)
}
