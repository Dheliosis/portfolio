export default function GenericButton({ buttonData }: any) {
	console.log(buttonData)

	return (
		<a target="_blank" href={buttonData.link} rel="noreferrer">
			<button className="bg-violet-500 rounded-xl px-5 py-3 text-white font-bold">
				{buttonData.text}
			</button>
		</a>
	)
}
