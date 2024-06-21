import { schemaTypes } from "common/src/sanity/SchemaType";
import { BiFile } from "react-icons/bi";
import { ArrayRule, ReferenceRule, defineField, defineType } from "sanity";

/**
 * Main menu
 */
export default defineType({
	name: schemaTypes.MAIN_MENU,
	title: "Main menu",
	type: "document",
	icon: BiFile,
	fields: [
		defineField({
			name: "menuItems",
			title: "Menu items",
			description: "Add, remove and edit menu items.",
			type: "array",
			of: [{ type: schemaTypes.MAIN_MENU_ITEM_OBJECT }, { type: schemaTypes.MAIN_MENU_ACTION_ITEM_OBJECT }],
			validation: (Rule: ArrayRule<ReferenceRule>) =>
				Rule.required().min(1).error("At least 1 component must be added"),
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Main menu",
			};
		},
	},
});
