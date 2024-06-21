/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./lib/components/**/*.{js,ts,jsx,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
	presets: [require("../../packages/config/tailwind/preset")],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
	daisyui: {
		themes: ["bumblebee", "dracula"],
	},
};
