import BookCard from "./bookCard";
import { Book } from "common/src/types/sanity/book";

interface Props {
	books: Array<Book>;
}

/**
 * Renders a list of books
 * @param param0
 * @returns
 */
export default function BookList({ books }: Props) {
	return (
		<>
			<div className="flex flex-wrap justify-center gap-4 gap-y-14">
				{books.map((book) => {
					return <BookCard book={book} key={book._id} />;
				})}
			</div>
		</>
	);
}
