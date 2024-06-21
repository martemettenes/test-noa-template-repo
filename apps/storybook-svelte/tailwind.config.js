/** @type {import('tailwindcss').Config} */

export default {
	content: ["./stories/**/*.tsx", "../../packages/ui/**/*.tsx"],
	presets: [require("../../packages/config/tailwind/preset")],
	theme: {
		extend: {},
	},
	plugins: [],
	daisyui: {
		themes: ["bumblebee"],
	},
};
