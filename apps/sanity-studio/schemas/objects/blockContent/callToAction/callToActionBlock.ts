import { AiOutlineLink } from "react-icons/ai";
import { UrlRule, defineField, defineType } from "sanity";

/**
 * Block content (portable text) for the «callToAction» schema
 */
export default defineType({
	title: "Block Container",
	name: "callToActionBlock",
	type: "block",
	styles: [],
	lists: [],
	marks: {
		decorators: [],
		annotations: [
			{
				title: "Inline link",
				name: "link",
				type: "object",
				icon: AiOutlineLink,
				fields: [
					defineField({
						title: "Link",
						name: "href",
						type: "url",
						validation: (Rule: UrlRule) =>
							Rule.uri({
								allowRelative: true,
								scheme: ["https", "http", "mailto", "tel"],
							}).required(),
					}),
				],
			},
		],
	},
});
