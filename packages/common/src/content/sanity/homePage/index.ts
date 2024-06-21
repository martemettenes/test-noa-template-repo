import groq from "groq";

import type { SanityConfigServer } from "../../../clients/config";
import { getSanityClient } from "../../../clients/sanityClient";
import { schemaTypes } from "../../../sanity/SchemaType";
import type { LandingPageBase } from "../../../types/sanity/landingPage";
import { contentListAuthorsFields, contentListBooksFields, contentListCategoriesFields } from "./contentList";

/**
 * fetches the home page document
 * @param preview
 * @returns
 */
export async function getHomePageDocument(
	config: SanityConfigServer,
	preview: boolean = false
): Promise<LandingPageBase> {
	const homePageGroq = groq`*[_type == "${schemaTypes.PAGE_HOME}"][0]{
		...,
		"slug": slug.current,
		pageItems[] {
			...,
			_type == "${schemaTypes.LANDING_PAGE_ITEM_ARTICLE_SECTION}" => {
				articleReferences[]-> { 
					...,
					collection->,
					"path": collection->.path.current,
					  "slug": slug.current
				 },
			},
			${contentListBooksFields},
			${contentListAuthorsFields},
			${contentListCategoriesFields},
		},	
	}`;
	const data = await getSanityClient(config, preview).fetch<LandingPageBase>(homePageGroq);
	return data;
}
