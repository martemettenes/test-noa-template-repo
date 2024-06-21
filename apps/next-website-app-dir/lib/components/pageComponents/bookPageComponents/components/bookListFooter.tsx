import { LinkButton } from "ui/react";

interface Props {
	numBooks: number;
	totalNumBooks: number;
}

/**
 * The footer part of the book list
 * This handles showing the number of books and a button to load more books
 * @param param0
 * @returns
 */
export default function BookListFooter({ numBooks, totalNumBooks }: Props) {
	const nextSetOfBooks = Math.min(numBooks + 10, totalNumBooks);

	return (
		<div className="mt-10 flex flex-col items-center gap-2">
			<p className="m-0 text-sm">
				Showing {numBooks} of {totalNumBooks} books
			</p>
			<LinkButton href={`/books?numBooks=${nextSetOfBooks}`} scroll={false}>
				See more books
			</LinkButton>
		</div>
	);
}
