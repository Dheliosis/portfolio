import Navigation from "./navigation"

export default function Layout({ children }: any) {
	return (
		<div className="bg-white min-h-screen">
			<main>
				<div className=" min-w-screen flex justify-center">
					<Navigation />
				</div>
				{children}
			</main>
		</div>
	)
}
