import type { RequestHandler } from "./$types";
import { env } from "$env/dynamic/private";

export const GET: RequestHandler = ({ url }) => {
	// TODO: Set the all/disallow based on the environment
	const body = [
		"# Host",
		`Host: ${url.origin}`,
		"\n# Sitemaps",
		`Sitemap: ${url.origin}/sitemap.xml`,
		"\n# Indexing",
		"User-agent: *",
	];

	if (env.ROBOTS_INDEXING_ENABLED === "true") {
		body.push("Allow: *");
	} else {
		body.push("Disallow: *");
	}

	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "text/plain",
	};

	return new Response(body.join("\n"), { headers });
};
