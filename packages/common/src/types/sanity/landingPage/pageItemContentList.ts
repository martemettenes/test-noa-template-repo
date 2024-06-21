import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { ArticleSchema } from "../article";
import { AuthorSchema, BookSchema, CategorySchema } from "../book";
import { SanityObjectSchema } from "../common";

//** Types for the different content lists */

export const PageItemContentListBooksSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS),
	title: z.string(),
	items: z.array(BookSchema),
});

export type PageItemContentListBooks = z.infer<typeof PageItemContentListBooksSchema>;

export const PageItemContentListAuthorsSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_AUTHORS),
	title: z.string(),
	items: z.array(AuthorSchema),
});

export type PageItemContentListAuthors = z.infer<typeof PageItemContentListAuthorsSchema>;

export const PageItemContentListArticlesSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_ARTICLES),
	title: z.string(),
	items: z.array(ArticleSchema),
});

export type PageItemContentListArticles = z.infer<typeof PageItemContentListArticlesSchema>;

export const PageItemContentListCategoriesSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_CATEGORIES),
	title: z.string(),
	items: z.array(CategorySchema),
});

export type PageItemContentListCategories = z.infer<typeof PageItemContentListCategoriesSchema>;
