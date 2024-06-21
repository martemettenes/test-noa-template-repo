import { z } from "zod";

import { SanityDocumentSchema } from "../common";
import { SanityObjectSchema } from "../common";

export const FooterLinkSchema = SanityObjectSchema.extend({
	footerLinkTitle: z.string(),
	footerLink: z.string(),
});

export type FooterLink = z.infer<typeof FooterLinkSchema>;

export const FooterSchema = SanityDocumentSchema.extend({
	_type: z.literal("siteFooter"),
	footerText: z.string(),
	footerLinks: z.array(FooterLinkSchema),
});
export type Footer = z.infer<typeof FooterSchema>;
