import { schemaTypes } from "common/src/sanity/SchemaType";
import { MdReviews } from "react-icons/md";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

const reviewTitle = "Reviews";
export const allBookReviews = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(reviewTitle)
		.schemaType(schemaTypes.BOOK_REVIEW)
		.icon(MdReviews)
		.child(
			S.documentList()
				.title(reviewTitle)
				.menuItems(S.documentTypeList(schemaTypes.BOOK_REVIEW).getMenuItems()!)
				.filter(`_type == "${schemaTypes.BOOK_REVIEW}"`)
				.child((documentId) =>
					S.document().documentId(documentId).schemaType(schemaTypes.BOOK_REVIEW).views([S.view.form()])
				)
		);
