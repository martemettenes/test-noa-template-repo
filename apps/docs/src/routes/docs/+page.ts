import { redirect } from "@sveltejs/kit";

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
	redirect(307, "/docs/getting-started/introduction");
}