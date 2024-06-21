import BookPageComponent from "@/lib/components/pageComponents/bookPageComponents/book";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getBookBySlug } from "common/src/content/sanity/books";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

interface Params {
	category: string;
	bookSlug: string;
}

export const revalidate = 3600; // every hour

async function getData(preview: boolean, bookSlug: string) {
	// Get the book page document...
	const book = await getBookBySlug(sanityConfigServer, preview, bookSlug);
	// ..and return it
	return book;
}

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const preview = draftMode().isEnabled ? true : false;
	const book = await getData(preview, params.bookSlug);

	if (!book) {
		return null;
	}

	return {
		title: book.title,
		description: book.synopsis.substring(0, 160),
	};
}

/**
 * This is the product page for a book
 */
export default async function BookPage({ params }: { params: Params }) {
	const preview = draftMode().isEnabled ? true : false;
	const book = await getData(preview, params.bookSlug);

	if (!book) {
		notFound();
	}

	return <BookPageComponent data={book} />;
}
