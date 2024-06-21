import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getAllArticlesForCollection } from "common/src/content/sanity/articles";

export const load: PageServerLoad = async ({ params }) => {
	const articles = await getAllArticlesForCollection(getSanityConfig(), params.collection);
	return { articles };
};
