import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getLandingPageDocumentBySlug } from "common/src/content/sanity/landingPages";

export const load: PageServerLoad = async ({ params, locals }) => {
	const preview = locals.preview;

	const page = await getLandingPageDocumentBySlug(getSanityConfig(), preview, params.slug);

	if (!page) {
		error(404, `Landing page with slug ${params.slug} was not found`);
	}

	return { page };
};
