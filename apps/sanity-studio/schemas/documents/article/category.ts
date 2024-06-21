import { schemaTypes } from "common/src/sanity/SchemaType";
import { SlugRule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.ARTICLE_CATEGORY,
	title: "Category",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule: { required: () => any }) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule: SlugRule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "name",
		},
	},
});
