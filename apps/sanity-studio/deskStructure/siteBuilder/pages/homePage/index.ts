import { PreviewComp } from "../../../../components/Preview";
import resolveProductionUrl from "../../../../resolveProductionUrl";
import { getClientFromContext } from "../../../client";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { BiHome } from "react-icons/bi";
import { SanityDocument } from "sanity";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

const title = "Home Page";

export const homePageStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(title)
		.schemaType(schemaTypes.PAGE_HOME)
		.icon(BiHome)
		.child(
			S.document()
				.schemaType(schemaTypes.PAGE_HOME)
				.documentId(schemaTypes.PAGE_HOME)
				.views([
					S.view.form(),
					S.view
						.component(PreviewComp)
						.options({
							url: (doc: SanityDocument) => resolveProductionUrl(doc, getClientFromContext(context)),
						})
						.title("Open Preview"),
				])
		);
