import { allArticles } from "./articlesAll";
import { categoriesStructure } from "./categories";
import { collectionsStructure } from "./collections";
import { RiArticleLine } from "react-icons/ri";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const articleStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title("Dynamic articles")
		.icon(RiArticleLine)
		.child(
			S.list()
				.title("All articles")
				.items([allArticles(S, context), collectionsStructure(S), categoriesStructure(S)])
		);
