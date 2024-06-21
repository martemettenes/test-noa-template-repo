import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getArticleBySlug } from "common/src/content/sanity/articles";

export const load: PageServerLoad = async ({ params, locals }) => {
	const preview = locals.preview;
	const article = await getArticleBySlug(getSanityConfig(), preview, params.collection, params.slug);

	return { article };
};
