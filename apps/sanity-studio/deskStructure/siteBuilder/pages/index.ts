import { articleStructure } from "./articles";
import { homePageStructure } from "./homePage";
import { landingPageStructure } from "./landingPages";
import { MdWebStories } from "react-icons/md";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const pagesStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title("Pages")
		.icon(MdWebStories)
		.child(
			S.list()
				.title("Pages")
				.items([
					landingPageStructure(S, context),
					articleStructure(S, context),
					S.divider(),
					homePageStructure(S, context),
				])
		);
