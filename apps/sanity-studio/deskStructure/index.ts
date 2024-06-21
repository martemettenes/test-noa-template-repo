import { dataStructure } from "./content";
import { cmsStructure } from "./siteBuilder";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.list()
		.title("Composable CMS")
		.items([dataStructure(S, context), cmsStructure(S, context)]);
