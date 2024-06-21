import { PreviewComp } from "../../../components/Preview";
import resolveProductionUrl from "../../../resolveProductionUrl";
import { getClientFromContext } from "../../client";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { BiBookAlt } from "react-icons/bi";
import { SanityDocument } from "sanity";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

const bookPageTitle = "Books";
export const allBooks = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(bookPageTitle)
		.schemaType(schemaTypes.BOOK)
		.icon(BiBookAlt)
		.child(
			S.documentList()
				.title(bookPageTitle)
				.menuItems(S.documentTypeList(schemaTypes.BOOK).getMenuItems()!)
				.filter(`_type == "${schemaTypes.BOOK}"`)
				.child((documentId) =>
					S.document()
						.documentId(documentId)
						.schemaType(schemaTypes.BOOK)
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
