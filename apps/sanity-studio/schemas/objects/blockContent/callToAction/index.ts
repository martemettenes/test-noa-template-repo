/**
 * This is the schema for the Call to action portable text component
 * This is available in all documents where the blockContainer is in use
 */
import { FiExternalLink } from "react-icons/fi";
import { ArrayRule, Rule, StringRule, defineField, defineType } from "sanity";

export default defineType({
	type: "object",
	title: "Call to action",
	name: "callToAction",
	icon: FiExternalLink,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			title: "Body Text",
			description: "This is the body text for the call to action component",
			name: "bodyBlock",
			validation: (Rule: ArrayRule<Rule>) => Rule.required(),
			type: "array",
			of: [
				{
					type: "callToActionBlock",
				},
			],
		}),
		defineField({
			name: "callToActionButton",
			type: "callToActionButton",
		}),
	],
	preview: {
		select: {
			title: "title",
		},
	},
});
