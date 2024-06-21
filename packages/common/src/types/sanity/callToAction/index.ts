/**
 * Types for the Call to action block component
 */
import { z } from "zod";

import { SanityTypedObjectSchema } from "../common";

export const CallToActionBlockCompSchema = SanityTypedObjectSchema.extend({
	_type: z.literal("callToAction"),
	title: z.string(),
	callToActionButton: z.object({
		label: z.string(),
		url: z.string(),
	}),
	bodyBlock: z.union([z.array(SanityTypedObjectSchema), SanityTypedObjectSchema]),
});
export type CallToActionBlockComp = z.infer<typeof CallToActionBlockCompSchema>;
