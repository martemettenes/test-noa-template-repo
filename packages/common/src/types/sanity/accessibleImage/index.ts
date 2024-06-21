import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";

export const AccessibleImageSchema = z.object({
	_type: z.literal(schemaTypes.ACCESSIBLE_IMAGE),
	alt: z.string(),
	caption: z.string().optional(),
	crop: z
		.object({
			_type: z.string(),
			left: z.number(),
			bottom: z.number(),
			right: z.number(),
			top: z.number(),
		})
		.optional(),
	hotspot: z
		.object({
			_type: z.string(),
			width: z.number(),
			height: z.number(),
			x: z.number(),
			y: z.number(),
		})
		.optional(),
	asset: z
		.object({
			_ref: z.string(),
		})
		.or(
			z.object({
				_id: z.string().optional(),
				url: z.string().optional(),
				path: z.string().optional(),
				assetId: z.string().optional(),
				extension: z.string().optional(),
			})
		),
});

export type AccessibleImage = z.infer<typeof AccessibleImageSchema>;
