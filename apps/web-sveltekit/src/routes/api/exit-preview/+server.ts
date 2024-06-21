import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ cookies }) => {
	// Delete the preview cookie
	cookies.delete("preview", { path: "/" });

	// Redirect to the home page
	redirect(307, "/");
};
