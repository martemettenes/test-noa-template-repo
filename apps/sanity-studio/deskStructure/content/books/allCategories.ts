import { PreviewComp } from "../../../components/Preview";
import resolveProductionUrl from "../../../resolveProductionUrl";
import { getClientFromContext } from "../../client";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { BiCategory } from "react-icons/bi";
import { SanityDocument } from "sanity";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

const categoryTitle = "Categories / Genres";
export const allBookCategories = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(categoryTitle)
		.schemaType(schemaTypes.BOOK_CATEGORY)
		.icon(BiCategory)
		.child(
			S.documentList()
				.title(categoryTitle)
				.menuItems(S.documentTypeList(schemaTypes.BOOK_CATEGORY).getMenuItems()!)
				.filter(`_type == "${schemaTypes.BOOK_CATEGORY}"`)
				.child((documentId) =>
					S.document()
						.documentId(documentId)
						.schemaType(schemaTypes.BOOK_CATEGORY)
						.views([
							S.view.form(),
							S.view
								.component(PreviewComp)
								.options({
									url: (doc: SanityDocument) =>
										resolveProductionUrl(doc, getClientFromContext(context)),
								})
								.title("Open Preview"),
						])
				)
		);
