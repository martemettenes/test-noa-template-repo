import { accessibleImageValidator } from "../../objects/accessibleImage";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { RiLayoutTopFill } from "react-icons/ri";
import { StringRule, UrlRule, defineField, defineType } from "sanity";

export default defineType({
	type: "object",
	title: "Landing Page: Hero",
	name: schemaTypes.LANDING_PAGE_ITEM_HERO,
	icon: RiLayoutTopFill,
	fieldsets: [
		{
			name: "settings",
			title: "Section: Settings",
			description:
				"All settings are required. It's a good idea to fill in these fields before proceeding to the image and text areas",
			options: { collapsible: true, collapsed: false },
		},
		{
			name: "image-area",
			title: "Section: Image area",
			description: "All options for the image area. Click to view all the fields.",
			options: { collapsible: true },
		},
		{
			name: "text-area",
			title: "Section: Text Area",
			description: "All options for the text area. Click to view all the fields.",
			options: { collapsible: true },
		},
	],
	fields: [
		defineField({
			name: "layout",
			title: "Main layout",
			description: "Choose between two main layouts.",
			type: "string",
			fieldset: "settings",
			options: {
				list: [
					{ title: "Image left | Text right", value: "imageLeft" },
					{ title: "Text left | Image right", value: "imageRight" },
				],
			},
			validation: (Rule: StringRule) =>
				Rule.required().error("Hero Component: Please make a selection for the «Main layout» field"),
		}),
		defineField({
			name: "purpose",
			title: "Usage or purpose",
			type: "string",
			fieldset: "settings",
			description:
				"Select a purpose for the hero component. This will determine font sizes and other UI behaviors",
			options: {
				list: [
					{ title: "Header element", value: "header" },
					{ title: "Section element", value: "section" },
				],
			},
			validation: (Rule: StringRule) =>
				Rule.required().error("Hero Component: Please select a purpose for the «Usage or purpose» field"),
		}),
		defineField({
			name: "heroImage",
			title: "Hero image (Image area)",
			type: "accessibleImage",
			description: "This is the main image placed on the left or right based on the selected layout",
			fieldset: "image-area",
			validation: accessibleImageValidator,
		}),
		defineField({
			name: "title",
			title: "Title (Text area)",
			type: "string",
			description: "The main title for the hero",
			fieldset: "text-area",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "bodyText",
			title: "Body text (Text area)",
			type: "string",
			description: "This is the main text for the hero...",
			fieldset: "text-area",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "callToActionType",
			title: "Call to action: Type",
			description: "The label for the call to type",
			type: "string",
			fieldset: "text-area",
			options: {
				list: [
					{ title: "Button", value: "button" },
					{ title: "Link", value: "link" },
				],
			},
			validation: (Rule: StringRule) =>
				Rule.required().error("Hero Component: Please select a label for the «Call to action type»"),
		}),
		defineField({
			name: "callToActionLabel",
			title: "Call to action: Label",
			description: "The label for the call to action",
			type: "string",
			fieldset: "text-area",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "callToActionUrl",
			title: "Call to action: URL",
			description: "The url for the call to action",
			type: "url",
			fieldset: "text-area",
			validation: (Rule: UrlRule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				})
					.required()
					.error("Hero Component: A relative or absolute url is required for the «Call to action url»"),
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title,
				subtitle: "Hero component",
			};
		},
	},
});
