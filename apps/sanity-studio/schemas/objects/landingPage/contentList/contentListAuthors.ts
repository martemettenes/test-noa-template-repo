import { contentListBase } from ".";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { ArrayRule, Rule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_AUTHORS,
	title: "Content list: Authors",
	icon: MdOutlinePeopleAlt,
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
					to: [{ type: schemaTypes.BOOK_AUTHOR }],
				},
			],
			validation: (Rule: ArrayRule<Rule>) => Rule.required().min(1).max(4).error("Min 1, max 4 authors"),
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
				subtitle: `Content list: Authors (${items.length} items)`,
				media: MdOutlinePeopleAlt,
			};
		},
	},
});
