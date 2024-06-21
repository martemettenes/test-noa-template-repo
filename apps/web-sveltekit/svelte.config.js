import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter({ runtime: "edge" }),
		env: {
			// The prefix used by public (available in the client) env variables
			// See the .env.example file for an example
			publicPrefix: "PUBLIC",
		},
	},
};

export default config;
