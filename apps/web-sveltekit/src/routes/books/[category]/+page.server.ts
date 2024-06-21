import type { PageServerLoad } from "./$types";
import { getAllBooksForCategory } from "common/src/content/sanity/books";
import { getSanityConfig } from "$lib/config/sanityConfig";

export const load = (async ({ params }) => {
	const category = params.category;
	const books = await getAllBooksForCategory(getSanityConfig(), category);
	return { books, category };
}) satisfies PageServerLoad;
