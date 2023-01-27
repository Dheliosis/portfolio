import Image from "next/image"

interface contactDataInterface {
	image: any
	name: string
	link: string
	value: string
	gradientColor: string
}

interface contactBubleInterface {
	contactData: contactDataInterface
}

export default function ContactBuble({ contactData }: contactBubleInterface) {
	return (
		<div className="p-4 rounded-2xl mx-2 my-2 bg-gradient-to-br shadow-lg relative">
			<div
				className={`
						absolute
						w-20
						h-24
						top-0
						left-0
						rounded-tl-2xl
						bg-gradient-to-br
						${contactData.gradientColor}
						via-transparent
					`}
			></div>
			<a href={contactData.link} target="_blank" rel="noreferrer">
				<div className="flex justify-between mb-6">
					<Image
						src={contactData.image}
						alt={contactData.name}
						width={40}
					></Image>
					<span className="material-symbols-outlined">
						arrow_outward
					</span>
				</div>
				<div>
					<p>{contactData.name}</p>
					<p className="text-xl font-semibold">{contactData.value}</p>
				</div>
			</a>
		</div>
	)
}
