/** @type {import('tailwindcss').Config} */

/**
 *  A preset file for Tailwind.
 *
 * @see https://tailwindcss.com/docs/configuration#presets
 *
 * With Presets you can easily share a Tailwind configuration across different projects.
 *
 */
module.exports = {
	theme: {},
	plugins: [require("daisyui"), require("@tailwindcss/container-queries")],
};
