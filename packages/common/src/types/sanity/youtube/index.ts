import { z } from "zod";

import { SanityObjectSchema } from "../common";

const BaseYouTube = z.object({
	_type: z.string(),
	_key: z.string(),
	title: z.string(),
	url: z.string(),
});

export const YouTubeZodObject = BaseYouTube.merge(SanityObjectSchema);

export type YouTube = z.infer<typeof YouTubeZodObject>;
