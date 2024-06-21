import BookListPageComponent from "@/lib/components/pageComponents/bookPageComponents/bookList";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getBookCount, getBooks, getCategories } from "common/src/content/sanity/books";

interface Params {
	searchParams: { [key: string]: string | string[] | undefined };
}

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata() {
	return {
		title: "A list of books",
		description: `A list of books that are for sale`,
	};
}

async function getData(numBooks: number) {
	// Fetch «numBooks» books from Sanity
	// Fetch all categories that are associated with a book
	const [books, totalNumBooks, categories] = await Promise.all([
		getBooks(sanityConfigServer, numBooks),
		getBookCount(sanityConfigServer),
		getCategories(sanityConfigServer),
	]);

	return { books, totalNumBooks, categories };
}

/**
 * Lists all books and categories
 */
export default async function BooksListPage({ searchParams }: Params) {
	// get number of books to fetch from query param numBooks
	// default to 10 books if the param is not set (first time loading the page)
	const numBooks = parseInt(searchParams.numBooks as string) || 10;
	// get alle the data from Sanity
	const { books, totalNumBooks, categories } = await getData(numBooks);
	// Render the page
	return <BookListPageComponent books={books} totalNumBooks={totalNumBooks} categories={categories} />;
}
