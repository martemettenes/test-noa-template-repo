import homePage from "../homePage";
import { landingPageSlugValidator } from "./blackList";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { CgWebsite } from "react-icons/cg";
import { defineField, defineType } from "sanity";

/**
 * Defines a landing page / home page
 * This is used for the home page and other landing pages
 * The landing page inherits most fields from the home page and adds a slug
 */

export default defineType({
	name: schemaTypes.PAGE_LANDING_PAGE,
	title: "Landing page",
	type: "document",
	icon: CgWebsite,
	fields: [
		defineField({
			name: "slug",
			title: "Page slug (path)",
			type: "slug",
			description: "",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: landingPageSlugValidator,
		}),
		...homePage.fields,
	],
	preview: {
		select: {
			title: "title",
		},
	},
});
