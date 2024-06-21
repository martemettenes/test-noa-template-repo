import type { RequestHandler } from "./$types";
import { getSanityConfig } from "$lib/config/sanityConfig";
import { getAllArticlesForSitemap } from "common/src/content/sanity/articles";
import { getAllLandingPagesForSitemap } from "common/src/content/sanity/landingPages";
import { getAllBooksForSitemap } from "common/src/content/sanity/books";
import { getHomePageDocument } from "common/src/content/sanity/homePage";

export const GET: RequestHandler = async ({ url }) => {
	// Grab the data from Sanity
	const [articles, landingPages, books, homePage] = await Promise.all([
		getAllArticlesForSitemap(getSanityConfig()),
		getAllLandingPagesForSitemap(getSanityConfig()),
		getAllBooksForSitemap(getSanityConfig()),
		getHomePageDocument(getSanityConfig(), false),
	]);
	const allPages = [...articles, ...landingPages, ...books];

	// Generate the paths
	const paths: Array<{ slug: string; lastModified: string }> = [];
	for (const page of allPages) {
		paths.push({
			slug: `/${page.slug}`,
			lastModified: page.lastModified,
		});
	}

	// Add the home page
	paths.push({
		slug: "/",
		lastModified: homePage._updatedAt || homePage._createdAt,
	});

	// Generate xml
	const urlArray = paths.map((path) => {
		return [
			`<url>`,
			`<loc>${url.origin}${path.slug}</loc>`,
			`<lastmod>${path.lastModified}</lastmod>`,
			`<changefreq>daily</changefreq>`,
			`<priority>0.7</priority>`,
			`</url>`,
		].join("");
	});

	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml",
	};

	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
	  <urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	  >
		${urlArray.join("")}
	  </urlset>`,
		{ headers: headers }
	);
};
