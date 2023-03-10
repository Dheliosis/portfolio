/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#5CA4EC",
				"secondary-blue": "#A5C7EA",
				"dark-blue": "#000F24",
				"dark-blue-light": "#63799A",
				"black": "#000"
			},
			fontFamily: {
				Montserrat: ["Montserrat", "ui-sans-serif", "system-ui"],
			},
		},
	},
	plugins: [],
}
