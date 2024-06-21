import { defineField } from "sanity";

/** Base fields for all contentLists */
export const contentListBase = [
	defineField({
		name: "title",
		title: "Title",
		type: "string",
		description: "Title of the content list",
		validation: (Rule) => Rule.required(),
	}),
];
