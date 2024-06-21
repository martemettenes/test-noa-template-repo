import type { PageServerLoad } from "./$types";
import { getBookBySlug } from "common/src/content/sanity/books";
import { getSanityConfig } from "$lib/config/sanityConfig";
import { error } from "@sveltejs/kit";

export const load = (async ({ params, locals }) => {
	// Get the books by slug (published and drafts)
	const book = await getBookBySlug(getSanityConfig(), locals.preview, params.booksSlug);

	if (!book) {
		error(404, `Book not found`);
	}
	return { book };
}) satisfies PageServerLoad;
