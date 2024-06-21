import { env } from "$env/dynamic/private";
import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { SignJWT } from "jose";
import { redirect } from "@sveltejs/kit";

export const actions = {
	default: async ({ cookies, request, url }) => {
		// Get the allowed domain, password, and jwt secret from the environment
		const allowedDomain = env.LOGIN_ALLOWED_DOMAIN;
		const envPassword = env.LOGIN_PASSWORD;
		const jwtSecret = env.LOGIN_JWT_SECRET;

		// Get search params and build the redirect url
		// This will be used to redirect for a successful login
		const bookSlug = url.searchParams.get("bookSlug");
		const bookCategorySlug = url.searchParams.get("bookCategorySlug");
		let destination: URL = new URL("/", url.origin);
		if (bookSlug && bookCategorySlug) {
			destination = new URL(`/books/${bookCategorySlug}/${bookSlug}/reviews`, url.origin);
		}

		// Get the form data with the email and password
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		// Check that the body is valid
		if (typeof email !== "string" || typeof password !== "string") {
			return fail(400, { errorMessage: "Missing/malformed body" });
		}

		// Check the username and password
		const emailParts = email.split("@");
		if (emailParts.length !== 2 || emailParts[1] !== allowedDomain || password !== envPassword) {
			return fail(401, { errorMessage: "Invalid email or password" });
		}

		// Good to go, generate a token and set a cookie
		const iat = Math.floor(Date.now() / 1000);
		const token = await new SignJWT({ email })
			.setProtectedHeader({ alg: "HS256" })
			.setIssuedAt(iat)
			.setIssuer("com.noaignite.template-repo")
			.setAudience("com.noaignite.template-repo-developers")
			.setExpirationTime("12h")
			.sign(new TextEncoder().encode(jwtSecret));
		cookies.set("token", token, {
			httpOnly: true,
			path: "/",
			secure: true,
			expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
		});

		// Redirect back to the review page
		redirect(303, destination);
	},
} satisfies Actions;
