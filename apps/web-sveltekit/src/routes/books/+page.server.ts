import type { PageServerLoad } from "./$types";
import { getBookCount, getBooks, getCategories } from "common/src/content/sanity/books";
import { getSanityConfig } from "$lib/config/sanityConfig";

export const load = (async ({ url }) => {
	const numBooks = parseInt(url.searchParams.get("numBooks") ?? "10", 10);

	const [books, totalNumBooks, categories] = await Promise.all([
		getBooks(getSanityConfig(), numBooks),
		getBookCount(getSanityConfig()),
		getCategories(getSanityConfig()),
	]);

	return { books, totalNumBooks, categories };
}) satisfies PageServerLoad;
