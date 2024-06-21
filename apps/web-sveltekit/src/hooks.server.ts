import type { Handle } from "@sveltejs/kit";

/**
 * This hook/middleware runs for each request
 * @see https://kit.svelte.dev/docs/hooks#server-hooks
 */
export const handle: Handle = async ({ event, resolve }) => {
	// If there is a preview cookie, then enable preview for all routes
	event.locals.preview = event.cookies.get("preview") ? true : false;

	const response = await resolve(event);

	if (event.locals.preview) {
		// We don't want caching when preview is active
		response.headers.set("cache-control", "no-cache, no-store, must-revalidate");
		response.headers.set("Pragma", "no-cache");
		response.headers.set("Expires", "0");
	}

	return response;
};
