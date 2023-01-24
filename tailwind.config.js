/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#5CA4EC",
				"secondary-blue": "#A5C7EA",
			},
			fontFamily: {
				"Montserrat": ["Montserrat", "ui-sans-serif", "system-ui"]
			}
		},
	},
	plugins: [],
}
