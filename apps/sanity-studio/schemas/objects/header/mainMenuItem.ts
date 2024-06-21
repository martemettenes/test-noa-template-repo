import { schemaTypes } from "common/src/sanity/SchemaType";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { ArrayRule, Rule, StringRule, defineField, defineType } from "sanity";

/**
 * Main menu item with submenu
 */
export default defineType({
	type: "object",
	title: "Sub-menu item",
	name: schemaTypes.MAIN_MENU_ITEM_OBJECT,
	description: "This creates a menu item with a sub-menu of links",
	icon: BsFillMenuButtonFill,
	fields: [
		defineField({
			name: "label",
			title: "Label",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "subItems",
			title: "Action items",
			type: "array",
			of: [{ type: schemaTypes.MAIN_MENU_ACTION_ITEM_OBJECT }],
			validation: (Rule: ArrayRule<Rule>) => Rule.required().min(1),
		}),
	],
	preview: {
		select: {
			title: "label",
		},
	},
});
