/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#25D366",
			},
			container: {
				screens: {
					md: "600px",
				},
				padding: {
					DEFAULT: "0.25rem",
				},
			},
		},
	},
};
