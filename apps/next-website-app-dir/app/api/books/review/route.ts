import { createPayload } from "./helpers";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { createClient } from "@sanity/client";
import { getBookBySlug } from "common/src/content/sanity/books";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const jwtSecret = process.env.LOGIN_JWT_SECRET ?? "";
const sanityMutationToken = process.env.SANITY_MUTATION_TOKEN ?? "";

/**
 * Takes a request and creates a review in Sanity.
 * The body should contain the following:
 * @example
 * {
 *    bookSlug: "<the-slug-of-the-book>",
 *    title: "<The title of the review>",
 *    review: "<The review text>",
 *    rating: <a number between 1 and 5>
 * }
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
	// Get the token from the cookie
	const token = req.cookies.get("token");
	if (!token) {
		return NextResponse.redirect("/login");
	}

	// The user email
	let email;

	try {
		// Validate the token
		const validated = jwt.verify(token.value, jwtSecret);
		if (!validated || !(validated as any).email) {
			// Invalid token claims
			return NextResponse.redirect("/login");
		}
		// Get the email from the token
		email = (validated as any).email;
	} catch {
		// Invalid token (tampering...)
		return NextResponse.redirect("/login");
	}

	// Get the request body
	const body = await req.json();

	// Validate the body
	if (!body || !body.bookSlug || !body.title || !body.review || !body.rating || body.rating < 1 || body.rating > 5) {
		return NextResponse.json({ status: "error", message: "Missing/malformed body" }, { status: 400 });
	}

	// Create the Sanity client
	const client = createClient({ ...sanityConfigServer, token: sanityMutationToken });

	// Get the book to use for the reference in the review
	const book = await getBookBySlug(sanityConfigServer, false, body.bookSlug);
	if (!book) {
		return NextResponse.json({ status: "error", message: "Book not found" }, { status: 404 });
	}

	// Create the review
	const document = createPayload(book._id, email, body.title, body.review, body.rating);

	try {
		// Write the review to Sanity
		const res = await client.createIfNotExists(document);
		return NextResponse.json({ status: "success", result: res });
	} catch (err: any) {
		return NextResponse.json({ status: "error", message: err.message ?? "Unknown error" }, { status: 500 });
	}
}
