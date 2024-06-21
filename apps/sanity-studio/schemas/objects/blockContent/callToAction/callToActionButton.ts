/**
 * Action button for the «callToAction» object
 */
import { StringRule, UrlRule, defineField, defineType } from "sanity";

export default defineType({
	name: "callToActionButton",
	title: "Action Button",
	type: "object",
	validation: (Rule: { required: () => any }) => Rule.required(),
	fields: [
		defineField({
			name: "label",
			title: "Label",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "url",
			title: "Url",
			type: "url",
			validation: (Rule: UrlRule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}).required(),
		}),
	],
});
