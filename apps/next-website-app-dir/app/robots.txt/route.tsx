import { getBaseUrl } from "common/src/utils/url";

/**
 * This Route is static (default)
 * Returns a robots.txt file
 */
export async function GET(request: Request) {
	const body = `# *
User-agent: *
Disallow: *
	
# Host
Host: ${getBaseUrl()}

# Sitemaps
Sitemap: ${getBaseUrl()}/sitemap.xml`;

	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "text/plain",
	};

	return new Response(body, { headers });
}
