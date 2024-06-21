import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const allowedDomain = process.env.LOGIN_ALLOWED_DOMAIN ?? "";
const password = process.env.LOGIN_PASSWORD ?? "";
const jwtSecret = process.env.LOGIN_JWT_SECRET ?? "";

/**
 * HEY! This is for demo purposes only. Do not use this in production!!
 * This route fakes login by checking the email and password against environment variables.
 * If the email and password are correct, a JWT is generated and set as a cookie.
 * @param req
 * @returns
 */
export async function POST(req: Request) {
	const body = await req.json();

	if (!body || !body.email || !body.password) {
		return new Response(JSON.stringify({ message: "Missing/malformed body" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Check the username and password
	const emailParts = body.email.split("@");
	if (emailParts.length !== 2 || emailParts[1] !== allowedDomain || body.password !== password) {
		return new Response(JSON.stringify({ message: "Invalid email or password" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Create the response
	let response = NextResponse.json({ message: "Logged in" });

	// Good to go, generate a token and set a cookie
	const token = jwt.sign({ email: body.email }, jwtSecret, { expiresIn: "12h" });
	response.cookies.set("token", token, {
		httpOnly: true,
		path: "/",
		expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
	});

	return response;
}
