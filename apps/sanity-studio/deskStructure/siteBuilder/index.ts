import { footerStructure } from "./footer";
import { headerStructure } from "./header";
import { pagesStructure } from "./pages";
import { AiOutlineLayout } from "react-icons/ai";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const cmsStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title("Site Builder")
		.icon(AiOutlineLayout)
		.child(
			S.list()
				.title("Site Builder")
				.items([pagesStructure(S, context), S.divider(), headerStructure(S), footerStructure(S)])
		);
