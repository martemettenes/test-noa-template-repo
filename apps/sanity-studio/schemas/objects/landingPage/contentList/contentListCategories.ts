import { contentListBase } from ".";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { TbCategory } from "react-icons/tb";
import { ArrayRule, Rule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_CATEGORIES,
	title: "Content list: Categories",
	icon: TbCategory,
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
					to: [{ type: schemaTypes.BOOK_CATEGORY }],
				},
			],
			validation: (Rule: ArrayRule<Rule>) => Rule.required().min(1).max(10).error("Min 1, max 10 categories"),
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
				subtitle: `Content list: Categories (${items.length} items)`,
				media: TbCategory,
			};
		},
	},
});
