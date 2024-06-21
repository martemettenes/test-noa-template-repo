import { schemaTypes } from "common/src/sanity/SchemaType";
import { AiFillFolder } from "react-icons/ai";
import { StructureBuilder } from "sanity/structure";

const articleCategory = "Categories";

export const categoriesStructure = (S: StructureBuilder) =>
	S.listItem()
		.title(articleCategory)
		.schemaType(schemaTypes.ARTICLE_CATEGORY)
		.icon(AiFillFolder)
		.child(S.documentTypeList(schemaTypes.ARTICLE_CATEGORY).title(articleCategory));
