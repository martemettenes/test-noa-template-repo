"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Alert, Button } from "ui/react";

/**
 * This is just for demo purposes
 * It talks to the api/login endpoint and redirects to
 * the review page after a successful login
 * @returns
 */
export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const router = useRouter();
	const searchParams = useSearchParams();

	function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}
	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value);
	}
	async function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		setLoading(true);
		if (email.length > 3 && password.length > 3) {
			try {
				const res = await fetch("/api/login", {
					method: "POST",
					body: JSON.stringify({ email, password }),
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (res.ok) {
					const bookSlug = searchParams.get("bookSlug");
					const bookCategorySlug = searchParams.get("bookCategorySlug");
					const url = new URL(`/books/${bookCategorySlug}/${bookSlug}/reviews`, window.location.origin);

					// You might be thinking, why not just use router.push?
					// Well, since the target page needs to read cookies,
					// we need to do a full page refresh first to clear the client cache,
					// then redirect to the page. It's a Next thing...
					// Read more about this here:
					// https://github.com/vercel/next.js/issues/49865
					// https://github.com/vercel/next.js/discussions/44149
					router.refresh();
					return router.replace(url.toString());
				} else {
					const data = await res.json();
					setError(data?.message ?? "Something went wrong");
				}
			} catch (error: any) {
				setError(error.message || "Something went wrong");
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
	}

	return (
		<div className="prose mx-auto mt-10 max-w-none">
			<h1>Login Page</h1>
			{error && <Alert alertType="error">{error}</Alert>}
			<div className="form-control min-w-[400px]">
				<label className="label">
					<span className="label-text">Email address</span>
				</label>
				<input
					type="text"
					placeholder="must end in @noaignite.com"
					className="input input-bordered w-full"
					onChange={handleEmailChange}
				/>
			</div>
			<div className="form-control min-w-[400px]">
				<label className="label">
					<span className="label-text">Password</span>
				</label>
				<input
					type="password"
					placeholder="*****"
					className="input input-bordered w-full"
					onChange={handlePasswordChange}
				/>
			</div>
			<Button
				ariaLabel="login button"
				className="mt-4"
				onClick={handleLogin}
				loading={loading}
				disabled={loading}
			>
				Login
			</Button>
		</div>
	);
}
