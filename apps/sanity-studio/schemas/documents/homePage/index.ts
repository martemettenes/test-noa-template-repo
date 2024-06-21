import { schemaTypes } from "common/src/sanity/SchemaType";
import { ArrayRule, Rule, StringRule, TextRule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.PAGE_HOME,
	title: "Home",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Page title",
			type: "string",
			description: "(required) The title of the page. This is used for search engines.",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Meta description",
			type: "text",
			description:
				"(required) This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
			validation: (Rule: TextRule) => Rule.required().min(56).max(160),
		}),
		defineField({
			name: "pageItems",
			title: "Page components",
			description: "Add, remove and edit page components.",
			type: "array",
			of: [
				{ type: schemaTypes.LANDING_PAGE_ITEM_HERO },
				{ type: schemaTypes.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR },
				{ type: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS },
				{ type: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_AUTHORS },
				{ type: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_CATEGORIES },
			],
			validation: (Rule: ArrayRule<Rule>) =>
				Rule.required().min(1).error("Min 1 component must be added to the page"),
		}),
	],
});
