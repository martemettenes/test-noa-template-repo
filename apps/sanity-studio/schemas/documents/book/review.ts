import { schemaTypes } from "common/src/sanity/SchemaType";
import { MdReviews } from "react-icons/md";
import { NumberRule, ReferenceRule, StringRule, TextRule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.BOOK_REVIEW,
	title: "Book Review",
	type: "document",
	icon: MdReviews,
	fields: [
		defineField({
			name: "bookRef",
			title: "For Book",
			description: "The book this review is for",
			type: "reference",
			to: [{ type: schemaTypes.BOOK }],
			validation: (Rule: ReferenceRule) => Rule.required(),
		}),
		defineField({
			name: "title",
			title: "Title",
			description: "The title of the review",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "author",
			title: "Author",
			description: "The author of the review (this is just a string)",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "rating",
			title: "Rating",
			description: "The rating of the book (1-5)",
			type: "number",
			validation: (Rule: NumberRule) => Rule.required().min(1).max(5),
		}),
		defineField({
			name: "review",
			title: "Review",
			description: "The review itself (text)",
			type: "text",
			validation: (Rule: TextRule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			bookTitle: "bookRef.title",
			image: "bookRef.coverImage",
			rating: "rating",
		},
		prepare(selection: any) {
			const { bookTitle, image, rating } = selection;

			return {
				title: bookTitle,
				subtitle: `Rating: ${rating}`,
				media: image,
			};
		},
	},
});
