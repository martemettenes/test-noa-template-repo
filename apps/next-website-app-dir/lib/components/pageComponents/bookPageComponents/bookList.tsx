import BookList from "@/lib/components/pageComponents/bookPageComponents/components/bookList";
import BookListFooter from "@/lib/components/pageComponents/bookPageComponents/components/bookListFooter";
import { Book, Category } from "common/src/types/sanity/book";

interface Props {
	books: Array<Book>;
	totalNumBooks: number;
	categories: Array<Category>;
}

/**
 * Lists all books, used by the BooksListPage
 * @param param0
 * @returns
 */
export default function BookListPageComponent({ books, totalNumBooks }: Props) {
	const numBooks = books.length;

	return (
		<>
			<header>
				<h1>Our books</h1>
				<p>Where Stories Come to Life</p>
			</header>
			<BookList books={books} />
			{numBooks < totalNumBooks && <BookListFooter numBooks={numBooks} totalNumBooks={totalNumBooks} />}
		</>
	);
}
