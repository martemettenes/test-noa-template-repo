import { schemaTypes } from "common/src/sanity/SchemaType";
import { AiFillFolder } from "react-icons/ai";
import { StructureBuilder } from "sanity/structure";

const articleCollectionsUrlPathTitle = "Collections";

export const collectionsStructure = (S: StructureBuilder) =>
	S.listItem()
		.title(articleCollectionsUrlPathTitle)
		.schemaType(schemaTypes.ARTICLE_COLLECTION_URL_PATH)
		.icon(AiFillFolder)
		.child(S.documentTypeList(schemaTypes.ARTICLE_COLLECTION_URL_PATH).title(articleCollectionsUrlPathTitle));
