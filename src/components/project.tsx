import "material-symbols"
import Image from "next/image"
import teamsplate from "public/teamsplate.png"

interface projectInterface {
	bgColorGradient: string
	image: any
	projectName: string
}

export default function Project({
	bgColorGradient,
	image,
	projectName,
}: projectInterface) {
	return (
		<>
			<div
				className={`
				h-64
				w-44
				rounded-2xl
				flex
				flex-col
				items-center
				relative
				bg-gradient-to-b
				${bgColorGradient}
				my-10
				mx-2
			`}
			>
				<h2 className="pt-4">{projectName}</h2>
				<Image
					src={image}
					width={100}
					height={100}
					alt={projectName}
					className="mt-10"
				></Image>
				<button
					className={`
						bg-[#F9EAED]
						w-2/3
						h-1/6
						rounded-3xl
						flex
						justify-center
						items-center
						absolute
						-bottom-5
					`}
				>
					<span className="material-symbols-outlined text-3xl">visibility</span>
				</button>
			</div>
		</>
	)
}
