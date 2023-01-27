import ContactBuble from "@/components/contactBuble"
import github from "public/img/contact/github.svg"
import gmail from "public/img/contact/gmail.svg"
import linkedin from "public/img/contact/linkedin.svg"

export default function Contact() {
	const contactData = [
		{
			name: "Github",
			image: github,
			link: "https://github.com/Dheliosis",
			value: "Dheliosis",
			gradientColor: "from-[#2fbb4f]"
		},
		{
			name: "Linkedin",
			image: linkedin,
			link: "https://www.linkedin.com/in/carolinefassot/",
			value: "carolinefassot",
			gradientColor: "from-[#0077B5]"
		},
		{
			name: "Gmail",
			image: gmail,
			link: "mailto:fassot.caroline@gmail.com",
			value: "fassot.caroline@gmail.com",
			gradientColor: "from-[#EB8E8E] "
		},
	]
	return (
		<>
			<main className="flex flex-col items-center h-[80vh] lg:justify-start">
				<h1 className="text-6xl font-bold mb-5">Contact</h1>
				<div className="flex flex-wrap justify-center items-center lg:h-full">
					{contactData.map(contact => (
						<ContactBuble
							key={contact.name}
							contactData={contact}
						></ContactBuble>
					))}
				</div>
			</main>
		</>
	)
}
