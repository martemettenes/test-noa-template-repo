import { schemaTypes } from "common/src/sanity/SchemaType";
import { BiCategory } from "react-icons/bi";
import { SlugRule, StringRule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.BOOK_CATEGORY,
	title: "Book Category",
	type: "document",
	icon: BiCategory,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			description: "The display title of the category",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			description: "The slug of the category (not displayed)",
			type: "slug",
			validation: (Rule: SlugRule) => Rule.required(),
			options: {
				source: "title",
			},
		}),
	],
});
