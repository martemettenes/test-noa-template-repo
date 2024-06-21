import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { SanityDocumentSchema } from "../common";
import { PageItemArticleSectionSchema } from "./pageItemArticleSection";
import { PageItemCallToActionBarSchema } from "./pageItemCallToActionBar";
import {
	PageItemContentListAuthorsSchema,
	PageItemContentListBooksSchema,
	PageItemContentListCategoriesSchema,
} from "./pageItemContentList";
import { PageItemHeroSchema } from "./pageItemHero";

export const LandingPageComponentsSchema = z.union([
	PageItemHeroSchema,
	PageItemArticleSectionSchema,
	PageItemCallToActionBarSchema,
	PageItemContentListBooksSchema,
	PageItemContentListAuthorsSchema,
	PageItemContentListCategoriesSchema,
]);

export type LandingPageComponents = z.infer<typeof LandingPageComponentsSchema>;

/**
 * Defines the data for a base landing page (a landing page without a slug, e.g. the Home page)
 */

export const LandingPageBaseSchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.PAGE_HOME),
	title: z.string(),
	description: z.string(),
	pageItems: z.array(LandingPageComponentsSchema),
});

export type LandingPageBase = z.infer<typeof LandingPageBaseSchema>;

/**
 * A general LandingPage is a HomePage with a slug
 */
export const LandingPageSchema = LandingPageBaseSchema.extend({
	slug: z.string(),
});

export type LandingPage = z.infer<typeof LandingPageSchema>;
