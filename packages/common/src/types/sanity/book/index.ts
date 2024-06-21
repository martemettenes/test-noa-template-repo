/**
 * Interfaces and types for the book schema as described in Studio
 * @see /apps/sanity-studio/schemas/documents/book
 */
import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { AccessibleImageSchema } from "../accessibleImage";
import { SanityDocumentSchema } from "../common";

export const AuthorSchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.BOOK_AUTHOR),
	firstName: z.string(),
	lastName: z.string(),
	description: z.string(),
	image: AccessibleImageSchema,
});

export type Author = z.infer<typeof AuthorSchema>;

export const CategorySchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.BOOK_CATEGORY),
	title: z.string(),
	slug: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;

export const ReviewSchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.BOOK_REVIEW),
	title: z.string(),
	author: z.string(),
	rating: z.number(),
	review: z.string(),
});

export type Review = z.infer<typeof ReviewSchema>;

export const BookSchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.BOOK),
	category: CategorySchema,
	title: z.string(),
	publishYear: z.number(),
	synopsis: z.string(),
	coverImage: AccessibleImageSchema,
	slug: z.string(),
	authors: z.array(AuthorSchema),
	reviews: z.array(ReviewSchema).optional(),
});

export type Book = z.infer<typeof BookSchema>;
