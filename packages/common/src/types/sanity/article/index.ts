import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { AccessibleImageSchema } from "../../../types/sanity/accessibleImage";
import { BlockContainerSchema } from "../../../types/sanity/blockContainer";
import { SanityDocumentSchema, SanitySlugSchema } from "../common";

export const ArticleCollectionSchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.ARTICLE_COLLECTION_URL_PATH),
	name: z.string(),
	description: z.string().optional(),
	path: z.object({
		current: z.string(),
	}),
});

export type ArticleCollection = z.infer<typeof ArticleCollectionSchema>;

export const ArticleSchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.PAGE_ARTICLE),
	title: z.string(),
	description: z.string(),
	summary: z.string(),
	articlePreviewImage: AccessibleImageSchema,
	collection: ArticleCollectionSchema,
	blocks: BlockContainerSchema,
	slug: z.string(),
	category: z
		.object({
			name: z.string(),
			slug: SanitySlugSchema,
		})
		.nullish(),
});

export type Article = z.infer<typeof ArticleSchema>;
