import { allBookAuthors } from "./books/allAuthors";
import { allBooks } from "./books/allBooks";
import { allBookCategories } from "./books/allCategories";
import { allBookReviews } from "./books/allReviews";
import { AiOutlineFileText } from "react-icons/ai";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const dataStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title("Content")
		.icon(AiOutlineFileText)
		.child(
			S.list()
				.title("Content")
				.items([
					allBooks(S, context),
					allBookAuthors(S, context),
					allBookCategories(S, context),
					S.divider(),
					allBookReviews(S, context),
				])
		);
