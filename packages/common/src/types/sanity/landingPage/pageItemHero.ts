import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { AccessibleImageSchema } from "../accessibleImage";
import { SanityObjectSchema } from "../common";

export const PageItemHeroSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.LANDING_PAGE_ITEM_HERO),
	layout: z.enum(["imageLeft", "imageRight"]),
	purpose: z.enum(["header", "section"]),
	callToActionType: z.enum(["button", "link"]),
	callToActionUrl: z.string(),
	heroImage: AccessibleImageSchema,
	title: z.string(),
	bodyText: z.string(),
	callToActionLabel: z.string(),
	backgroundImage: AccessibleImageSchema.optional(),
});

export type PageItemHero = z.infer<typeof PageItemHeroSchema>;
