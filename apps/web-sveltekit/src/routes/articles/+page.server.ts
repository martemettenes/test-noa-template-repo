import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getAllArticles } from "common/src/content/sanity/articles";

export const load: PageServerLoad = async () => {
	const articles = await getAllArticles(getSanityConfig());
	return { articles };
};
