import { contentListBase } from ".";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { ImBooks } from "react-icons/im";
import { ArrayRule, Rule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS,
	title: "Content list: Books",
	icon: ImBooks,
	type: "object",
	fields: [
		...contentListBase,
		defineField({
			name: "items",
			title: "Items",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: schemaTypes.BOOK }],
				},
			],
			validation: (Rule: ArrayRule<Rule>) =>
				Rule.required().min(1).max(8).error("Minimum 1 item must be added to the list, max 8"),
		}),
	],
	preview: {
		select: {
			title: "title",
			items: "items",
		},
		prepare({ title, items }) {
			return {
				title: title,
				subtitle: `Content list: Books (${items.length} items)`,
				media: ImBooks,
			};
		},
	},
});
