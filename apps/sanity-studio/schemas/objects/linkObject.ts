import { schemaTypes } from "common/src/sanity/SchemaType";
import { UrlRule, defineField, defineType } from "sanity";

export default defineType({
	title: "Link",
	name: schemaTypes.LINK_OBJECT,
	type: "object",
	fields: [
		defineField({
			name: "footerLinkTitle",
			type: "string",
			title: "Footer link title",
		}),
		defineField({
			name: "footerLink",
			type: "url",
			validation: (Rule: UrlRule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}).required(),
		}),
	],
	preview: {
		select: {
			title: "footerLinkTitle",
		},
	},
});
