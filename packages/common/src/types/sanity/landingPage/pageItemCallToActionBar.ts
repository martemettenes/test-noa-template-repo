import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { SanityObjectSchema } from "../common";

export const PageItemCallToActionBarSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR),
	bodyText: z.string(),
	callToActionLabel: z.string(),
	callToActionUrl: z.string(),
	background: z.enum(["none", "solid", "glass"]),
});

export type PageItemCallToActionBar = z.infer<typeof PageItemCallToActionBarSchema>;
