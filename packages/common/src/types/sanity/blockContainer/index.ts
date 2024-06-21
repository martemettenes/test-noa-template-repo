import { z } from "zod";

import { SanityTypedObjectSchema } from "../common";

/**
 * This is a block container used by the article page in this example
 * Sanity Portable text
 */
export const BlockContainerSchema = z.object({
	_type: z.literal("blockContainer").optional(),
	body: z.array(SanityTypedObjectSchema).or(SanityTypedObjectSchema),
});

export type BlockContainer = z.infer<typeof BlockContainerSchema>;
