import { z } from "zod";

// Sanity Document
export const SanityDocumentSchema = z.object({
	_id: z.string(),
	_type: z.string(),
	_createdAt: z.string(),
	_updatedAt: z.string().optional(),
	_rev: z.string().optional(),
});

export type SanityDocument = z.infer<typeof SanityDocumentSchema>;

// Sanity Object
export const SanityObjectSchema = z.object({
	_key: z.string(),
	_type: z.string(),
});

export type SanityObject = z.infer<typeof SanityObjectSchema>;

// Sanity Typed Object
export const SanityTypedObjectSchema = SanityObjectSchema.extend({
	_type: z.string(),
	_key: z.string().optional(),
});

export type SanityTypedObject = z.infer<typeof SanityTypedObjectSchema>;

// Slug
export const SanitySlugSchema = z.object({
	current: z.string(),
});

export type SanitySlug = z.infer<typeof SanitySlugSchema>;

// Reference
export const SanityReferenceSchema = z.object({
	_ref: z.string(),
	_type: z.string(),
});

export type SanityReference = z.infer<typeof SanityReferenceSchema>;
