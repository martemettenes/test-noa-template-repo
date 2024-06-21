import { z } from "zod";

import { schemaTypes } from "../../../sanity/SchemaType";
import { SanityDocumentSchema, SanityObjectSchema } from "../common";

/**
 * A main menu item with an action
 * This is the item which can actually be clicked
 */
export const MainMenuActionItemSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.MAIN_MENU_ACTION_ITEM_OBJECT),
	icon: z.union([z.literal("home"), z.literal("document"), z.literal("newspaper")]).optional(),
	url: z.string(),
	label: z.string(),
});
export type MainMenuActionItem = z.infer<typeof MainMenuActionItemSchema>;

/**
 * A main menu item which creates a sub-menu
 * with action items (see MainMenuActionItem)
 */
export const MainMenuItemSchema = SanityObjectSchema.extend({
	_type: z.literal(schemaTypes.MAIN_MENU_ITEM_OBJECT),
	label: z.string(),
	subItems: z.array(MainMenuActionItemSchema),
});
export type MainMenuItem = z.infer<typeof MainMenuItemSchema>;

export const MainMenuSchema = SanityDocumentSchema.extend({
	_type: z.literal(schemaTypes.MAIN_MENU),
	menuItems: z.array(z.union([MainMenuItemSchema, MainMenuActionItemSchema])),
});
export type MainMenu = z.infer<typeof MainMenuSchema>;
