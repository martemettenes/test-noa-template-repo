import { schemaTypes } from "common/src/sanity/SchemaType";
import { RiLayoutBottomFill } from "react-icons/ri";
import { StructureBuilder } from "sanity/structure";

export const footerStructure = (S: StructureBuilder) =>
	S.listItem()
		.title("Footer")
		.schemaType(schemaTypes.SITE_FOOTER)
		.icon(RiLayoutBottomFill)
		.child(S.document().schemaType(schemaTypes.SITE_FOOTER).documentId(schemaTypes.SITE_FOOTER));
