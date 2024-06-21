import { accessibleImageValidator } from "../../objects/accessibleImage";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { BiBookAlt } from "react-icons/bi";
import { ArrayRule, NumberRule, ReferenceRule, SlugRule, StringRule, TextRule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.BOOK,
	title: "Book",
	type: "document",
	icon: BiBookAlt,
	fields: [
		defineField({
			name: "category",
			title: "Category",
			description: "The category of the book",
			type: "reference",
			to: [{ type: schemaTypes.BOOK_CATEGORY }],
			validation: (Rule: ReferenceRule) => Rule.required(),
		}),
		defineField({
			name: "title",
			title: "Title",
			description: "The title of the book",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			description: "The slug of the book (not displayed)",
			type: "slug",
			validation: (Rule: SlugRule) => Rule.required(),
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "publishYear",
			title: "Publish year",
			description: "The year the book was published",
			type: "number",
			validation: (Rule: NumberRule) => Rule.required(),
		}),
		defineField({
			name: "authors",
			title: "Authors",
			description: "The authors of the book (one or more)",
			type: "array",
			of: [{ type: "reference", to: [{ type: schemaTypes.BOOK_AUTHOR }] }],
			validation: (Rule: ArrayRule<ReferenceRule>) =>
				Rule.required().min(1).error("At least one author is required"),
		}),
		defineField({
			name: "coverImage",
			title: "Cover image",
			description: "The cover image of the book",
			type: schemaTypes.ACCESSIBLE_IMAGE,
			validation: accessibleImageValidator,
		}),
		defineField({
			name: "synopsis",
			title: "Synopsis",
			description: "The synopsis / summary of the book",
			type: "text",
			validation: (Rule: TextRule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title",
			image: "coverImage",
			author: "authors.0.lastName",
		},
		prepare(selection: any) {
			const { title, image, author } = selection;

			return {
				title,
				subtitle: author,
				media: image,
			};
		},
	},
});
