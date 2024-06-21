import { schemaTypes } from "common/src/sanity/SchemaType";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { StructureBuilder } from "sanity/structure";

export const headerStructure = (S: StructureBuilder) =>
	S.listItem()
		.title("Main menu")
		.schemaType(schemaTypes.MAIN_MENU)
		.icon(BsFillMenuButtonWideFill)
		.child(S.document().schemaType(schemaTypes.MAIN_MENU).documentId(schemaTypes.MAIN_MENU));
