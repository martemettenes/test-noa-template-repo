/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}", "../../packages/ui/**/*.{ts,tsx}"],
	presets: [require("../../packages/config/tailwind/preset")],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["bumblebee"],
	},
};
