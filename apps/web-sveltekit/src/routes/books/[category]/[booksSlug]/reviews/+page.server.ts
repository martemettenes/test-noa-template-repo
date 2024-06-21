import type { PageServerLoad } from "./$types";
import { getBookBySlug } from "common/src/content/sanity/books";
import { getSanityConfig } from "$lib/config/sanityConfig";
import { error } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { jwtVerify } from "jose";
import { createClient } from "@sanity/client";
import { createPayload } from "./helpers";

export const load = (async ({ params, cookies }) => {
	// Get the book
	const book = await getBookBySlug(getSanityConfig(), false, params.booksSlug);

	if (!book) {
		error(404, `Book not found`);
	}

	// Try to read the token from the cookie
	// No need to validate the token here, the server action handles this
	// if the user attempts to post a review
	const token = cookies.get("token");

	// ..and return it
	return { book, isLoggedIn: !!token };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ params, request, cookies }) => {
		// read the token
		const jwt = cookies.get("token");
		if (!jwt) {
			return fail(403, { errorMessage: "Not logged in" });
		}

		// User email from the token
		let email: string;

		// Validate the token
		const tokenSecret = new TextEncoder().encode(env.LOGIN_JWT_SECRET);
		try {
			const { payload } = await jwtVerify(jwt, tokenSecret, {
				issuer: "com.noaignite.template-repo",
				audience: "com.noaignite.template-repo-developers",
			});
			if (!payload.email) {
				return fail(403, { errorMessage: "Invalid token" });
			}
			email = payload.email as string;
		} catch (e) {
			return fail(403, { errorMessage: "Invalid token" });
		}

		// Get the book slug
		const bookSlug = params.booksSlug;

		// Get the form data with the review
		const formData = await request.formData();
		const title = formData.get("title") as string;
		const body = formData.get("body") as string;
		const rating = parseInt((formData.get("rating") as string) || "0", 10);

		// Validate the payload and the book slug
		if (!title || !body || !bookSlug || typeof rating !== "number" || rating < 1 || rating > 5) {
			return fail(400, { errorMessage: "Missing/malformed body" });
		}

		// Create the Sanity client
		const client = createClient(getSanityConfig({ useMutationToken: true }));

		// Get the book to use for the reference in the review
		const book = await getBookBySlug(getSanityConfig(), false, bookSlug);
		if (!book) {
			return fail(404, { errorMessage: "Book not found" });
		}

		// Create the review
		const document = createPayload(book._id, email, title, body, rating);

		try {
			// Write the review to Sanity
			await client.createIfNotExists(document);
			return { success: true };
		} catch (err) {
			const typedErr = err as Error;
			return fail(500, { errorMessage: typedErr.message ?? "Unknown error" });
		}
	},
};
