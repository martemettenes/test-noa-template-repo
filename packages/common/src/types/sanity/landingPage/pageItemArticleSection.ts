import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { ArticleSchema } from "../article";
import { SanityObjectSchema } from "../common";

export const PageItemArticleSectionSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.LANDING_PAGE_ITEM_ARTICLE_SECTION),
	hideHeader: z.boolean().optional(),
	title: z.string(),
	description: z.string(),
	articleReferences: z.array(ArticleSchema),
	backgroundColor: z.enum(["white", "grey"]),
});

export type PageItemArticleSection = z.infer<typeof PageItemArticleSectionSchema>;
