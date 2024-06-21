import { ArticleSchema } from "../types/sanity/article";
import { BookSchema } from "../types/sanity/book";
import { LandingPageBaseSchema, LandingPageSchema } from "../types/sanity/landingPage";
import { schemaTypes } from "./SchemaType";

/**
 * Fetches the correct schema validator for the given type
 * In some cases there are two validators for the same type.
 * This happens when the Sanity document schema is different from
 * the data fetched by groq queries (resolved references, etc.)
 * @param type The schema type
 * @param studioValidator Set to true if the validator is used within Sanity Studio
 * @returns A schema validator or null if none exists
 */
export function getValidatorForSchema(type: string) {
	switch (type) {
		// Article
		case schemaTypes.PAGE_ARTICLE:
			return ArticleSchema;
		// Landing pages (and home page)
		case schemaTypes.PAGE_HOME:
			return LandingPageBaseSchema;
		case schemaTypes.PAGE_LANDING_PAGE:
			return LandingPageSchema;
		// Books
		case schemaTypes.BOOK:
			return BookSchema;
		default:
			return null;
	}
}
