import { SANITY_PREVIEW_SECRET } from "$env/static/private";
import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

/**
 * This endpoint handles Sanity preview
 * @param param0
 * @returns
 */
export const GET: RequestHandler = async ({ url, cookies }) => {
	const secretKey = url.searchParams.get("secret");

	if (secretKey !== SANITY_PREVIEW_SECRET) {
		return new Response("Invalid token", { status: 401 });
	}

	const docType = url.searchParams.get("_type");
	const docId = url.searchParams.get("_id");
	const docSlug = url.searchParams.get("slug") || undefined;
	const docCollection = url.searchParams.get("collection") || undefined;

	if (!docId || !docType) {
		return new Response("You must pass a type and an id", { status: 400 });
	}

	// Set a preview cookie
	cookies.set("preview", "true", { path: "/" });

	// redirect to the correct page to preview
	const path = resolvePath(docType, docId, docCollection, docSlug);
	redirect(307, path);
};

function resolvePath(type: string, id: string, collection?: string, slug?: string): string {
	const path = getTypePath(type, id, collection, slug);
	return path ? path : getPathForId(id);
}

// Grabs the correct path for an id
function getPathForId(_id: string): string {
	if (_id === "errorPage") {
		return "/error";
	}
	return "/";
}

// Creates the path for the page
function buildTypePath(basePath: string, id?: string, slug?: string): string {
	if (slug) {
		return `${basePath.replace(/\/$/, "")}/${slug}`;
	}
	if (id) {
		return `${basePath}/${id}`;
	}
	return basePath;
}

// Handles cases where the slug has been generated in a custom way
function getTypePath(type: string, id: string, collection?: string, slug?: string): string | null {
	if (type === "pageArticle") {
		return buildTypePath("/", id, `articles/${collection}/${slug}`);
	}
	if (type === "pageHome" || type === "pageLandingPage") {
		return buildTypePath("/", undefined, slug);
	}
	return null;
}
