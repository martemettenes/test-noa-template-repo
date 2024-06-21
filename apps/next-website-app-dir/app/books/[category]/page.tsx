import BookCategoryPageComponent from "@/lib/components/pageComponents/bookPageComponents/bookCategory";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getAllBooksForCategory } from "common/src/content/sanity/books";

interface Params {
	category: string;
}

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	return {
		title: `All books in ${params.category}`,
		description: `A list of all books for ${params.category}`,
	};
}

async function getData(category: string) {
	// fetch all the books for the category
	const books = await getAllBooksForCategory(sanityConfigServer, category);
	return { books };
}

/**
 * List all the books for the current category
 */
export default async function BookCategory({ params }: { params: Params }) {
	const { books } = await getData(params.category);
	return <BookCategoryPageComponent books={books} />;
}
