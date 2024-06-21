import { PreviewComp } from "../../../../../components/Preview";
import resolveProductionUrl from "../../../../../resolveProductionUrl";
import { getClientFromContext } from "../../../../client";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { RiArticleLine } from "react-icons/ri";
import { SanityDocument } from "sanity";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

const articlePageTitle = "All articles";
export const allArticles = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(articlePageTitle)
		.schemaType(schemaTypes.PAGE_ARTICLE)
		.icon(RiArticleLine)
		.child(
			S.documentList()
				.title(articlePageTitle)
				.menuItems(S.documentTypeList(schemaTypes.PAGE_ARTICLE).getMenuItems()!)
				.filter(`_type == "${schemaTypes.PAGE_ARTICLE}"`)
				.child((documentId) =>
					S.document()
						.documentId(documentId)
						.schemaType(schemaTypes.PAGE_ARTICLE)
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
