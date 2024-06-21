import BookList from "@/lib/components/pageComponents/bookPageComponents/components/bookList";
import { Book } from "common/src/types/sanity/book";

interface Props {
	books: Array<Book>;
}

/**
 * Lists all books in a category, used by the BookCategoryPage
 * @param param0
 * @returns
 */
export default function BookCategoryPageComponent({ books }: Props) {
	// All of the passed books have the same category
	// since this is a category page component
	const category = books[0].category;

	return (
		<>
			<header>
				<h1>{category.title}</h1>
			</header>
			<BookList books={books} />
		</>
	);
}
