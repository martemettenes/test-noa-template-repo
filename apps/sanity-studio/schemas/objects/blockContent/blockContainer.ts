import { accessibleImageValidator } from "../accessibleImage";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { BiLinkExternal, BiNews } from "react-icons/bi";
import { defineField, defineType } from "sanity";

/**
 * This is block content with the option of inserting objects/components
 * This is primarily used for the Generic Page type
 */
export default defineType({
	title: "Block Container",
	name: "blockContainer",
	type: "object",
	icon: BiNews,
	fields: [
		defineField({
			name: "body",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					// Styles let you set what your user can mark up blocks with. These
					// correspond with HTML tags, but you can set any title or value
					// you want and decide how you want to deal with it where you want to
					// use your content.
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "Quote", value: "blockquote" },
					],
					lists: [{ title: "Bullet", value: "bullet" }],
					// Marks let you mark up inline text in the block editor.
					marks: {
						// Decorators usually describe a single property – e.g. a typographic
						// preference or highlighting by editors.
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
						// Annotations can be any object structure – e.g. a link or a footnote.
						annotations: [
							{
								title: "External link",
								name: "link",
								type: "object",
								icon: BiLinkExternal,
								fields: [
									{
										title: "External link",
										name: "href",
										type: "url",
										validation: (Rule: any) =>
											Rule.uri({
												allowRelative: true,
												scheme: ["https", "http", "mailto", "tel"],
											}).required(),
									},
									{
										title: "Should open link in new tab/window",
										name: "blank",
										type: "boolean",
									},
								],
							},
						],
					},
				},
				defineField({
					type: "accessibleImage",
					name: "accessibleImage",
					title: "Image",
					validation: accessibleImageValidator,
				}),
				defineField({
					type: "youtube",
					name: "youtube",
				}),
				defineField({ type: "callToAction", name: "callToAction" }),
				defineField({
					type: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS,
					name: schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS,
				}),
			],
		}),
	],
});
