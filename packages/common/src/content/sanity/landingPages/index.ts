import groq from "groq";

import type { SanityConfigServer } from "../../../clients/config";
import { getSanityClient } from "../../../clients/sanityClient";
import { schemaTypes } from "../../../sanity/SchemaType";
import type { LandingPage } from "../../../types/sanity/landingPage";

/**
 * Fetches a landing page for a given slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getLandingPageDocumentBySlug(
	config: SanityConfigServer,
	preview: boolean,
	slug: string
): Promise<LandingPage> {
	const landingPageGroq = groq`*[_type == "${schemaTypes.PAGE_LANDING_PAGE}" && slug.current == $slug][0]{
		...,
		"slug": slug.current,
		pageItems[] {
			...,
			_type == "reference" => @->,
			_type == "${schemaTypes.LANDING_PAGE_ITEM_ARTICLE_SECTION}" => {
				articleReferences[]-> { 
					...,
					collection->,
					"path": collection->.path.current,
					  "slug": slug.current
				 },
			},
		},	
	}`;
	const data = await getSanityClient(config, preview).fetch<LandingPage>(landingPageGroq, { slug });
	return data;
}

/**
 * Returns only the slug for all landing pages
 * Used to generate a sitemap or for generateStaticParams
 * @param config
 * @returns
 */
export async function getAllLandingPagesForSitemap(
	config: SanityConfigServer
): Promise<Array<{ slug: string; lastModified: string }>> {
	const landingPageForSitemapGroq = groq`*[_type == "${schemaTypes.PAGE_LANDING_PAGE}"] {
		"slug": slug.current,
		"lastModified": coalesce(_updatedAt, _createdAt)
	}`;
	const data =
		await getSanityClient(config).fetch<Array<{ slug: string; lastModified: string }>>(landingPageForSitemapGroq);
	return data;
}
