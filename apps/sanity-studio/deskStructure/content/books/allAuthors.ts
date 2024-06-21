import { PreviewComp } from "../../../components/Preview";
import resolveProductionUrl from "../../../resolveProductionUrl";
import { getClientFromContext } from "../../client";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { BsFillPersonFill } from "react-icons/bs";
import { SanityDocument } from "sanity";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

const authorTitle = "Authors";
export const allBookAuthors = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(authorTitle)
		.schemaType(schemaTypes.BOOK_AUTHOR)
		.icon(BsFillPersonFill)
		.child(
			S.documentList()
				.title(authorTitle)
				.menuItems(S.documentTypeList(schemaTypes.BOOK_AUTHOR).getMenuItems()!)
				.filter(`_type == "${schemaTypes.BOOK_AUTHOR}"`)
				.child((documentId) =>
					S.document()
						.documentId(documentId)
						.schemaType(schemaTypes.BOOK_AUTHOR)
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
