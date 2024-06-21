import { sanityConfigServer } from "@/lib/config/envVariables";
import { getAllArticles } from "common/src/content/sanity/articles";
import { getAllLandingPagesForSitemap } from "common/src/content/sanity/landingPages";
import { getBaseUrl } from "common/src/utils/url";

interface SitemapField {
	loc: string;
	lastmod: string;
	changefreq: "daily";
}

// Invalidate the sitemap every 24 hours, matching the changefreq
export const revalidate = 86400;

/**
 * This Route is using ISR and will update the cache every 24 hours (see «revalidate» above)
 * Returns a sitemap
 */
export async function GET(request: Request) {
	// Grab all articles
	const allArticles = await getAllArticles(sanityConfigServer);
	// Get all landing pages
	const allLandingPages = await getAllLandingPagesForSitemap(sanityConfigServer);
	// TODO: Get all books

	// Sitemap fields
	const fields: Array<SitemapField> = [];

	// TODO: Implement

	const urlArray = fields.map((field) => {
		return `<url>
		<loc>${field.loc}</loc>
        <changefreq>${field.changefreq}</changefreq>
		<lastmod>${field.lastmod}</lastmod>
        <priority>0.7</priority>
		</url>`;
	});

	const body = `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
	  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	  xmlns:xhtml="https://www.w3.org/1999/xhtml"
	  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
	  ${urlArray.join("")}
	</urlset>`;

	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml",
	};

	return new Response(body, { headers });
}
