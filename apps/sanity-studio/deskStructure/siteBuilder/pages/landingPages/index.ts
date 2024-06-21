import { PreviewComp } from "../../../../components/Preview";
import resolveProductionUrl from "../../../../resolveProductionUrl";
import { getClientFromContext } from "../../../client";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { CgWebsite } from "react-icons/cg";
import { SanityDocument } from "sanity";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const landingPageStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title("Landing pages")
		.icon(CgWebsite)
		.child(
			S.documentList()
				.title("All landing pages")
				.menuItems(S.documentTypeList(schemaTypes.PAGE_LANDING_PAGE).getMenuItems()!)
				.filter(`_type == "${schemaTypes.PAGE_LANDING_PAGE}"`)
				.child((documentId) =>
					S.document()
						.documentId(documentId)
						.schemaType(schemaTypes.PAGE_LANDING_PAGE)
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
