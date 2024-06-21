import { serverSideEnvironmentVariables } from "@/lib/config/envVariables";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { draftMode } from "next/headers";

/**
 * Handles all preview path when Sanity Studio asks for a preview
 */
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	// Validate that this request is coming from a known Sanity Studio instance
	if (searchParams.get("secret") !== serverSideEnvironmentVariables.sanityPreviewSecret) {
		return new Response("Invalid request", { status: 401 });
	}

	// Extract query params
	const docType = searchParams.get("_type") as string;
	const docId = searchParams.get("_id") as string;
	const docSlug = (searchParams.get("slug") as string) || undefined;
	const docCollection = (searchParams.get("collection") as string) || undefined;

	if (!docId || !docType) {
		return new Response("You must pass a type and an id", { status: 400 });
	}

	// This flips preview mode to true for all Next pages
	draftMode().enable();

	const data = draftMode();

	// redirect to the correct page to preview
	const path = resolvePath(docType, docId, docCollection, docSlug);

	// Redirect to the preview path
	// Note: Not using «redirect()» because it has a bug at the time of writing this»
	return new Response(null, {
		status: 307,
		headers: {
			Location: path,
		},
	});
}

/**
 * Resolves the preview path based on document properties
 * Try to get the path using the type first
 * if that returns null
 * the get the path by id
 */
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
	if (type === schemaTypes.PAGE_ARTICLE) {
		return buildTypePath("/", id, `articles/${collection}/${slug}`);
	}
	if (type === schemaTypes.PAGE_HOME || type === schemaTypes.PAGE_LANDING_PAGE) {
		return buildTypePath("/", undefined, slug);
	}
	if (type === schemaTypes.BOOK) {
		return buildTypePath(`/books`, undefined, `${collection}/${slug}`);
	}
	return null;
}
