import BookReviewCreate from "@/lib/components/pageComponents/bookPageComponents/components/reviews/createReview";
import BookReviewList from "@/lib/components/pageComponents/bookPageComponents/components/reviews/reviewList";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getBookBySlug } from "common/src/content/sanity/books";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { LinkButton } from "ui/react";

interface Params {
	category: string;
	bookSlug: string;
}

// The page needs to be dynamic to allow it to read cookies
export const dynamic = "force-dynamic";

async function getData(bookSlug: string) {
	const book = await getBookBySlug(sanityConfigServer, false, bookSlug);

	return book;
}

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const book = await getData(params.bookSlug);

	if (!book) {
		return null;
	}

	return {
		title: `Reviews for ${book.title}`,
		description: book.synopsis.substring(0, 160),
	};
}

/**
 * This page allows the user to submit a review for a book
 * The review is submitted to the api endpoint /api/books/review
 * @see /api/books/review
 */
export default async function ReviewsPage({ params }: { params: Params }) {
	const book = await getData(params.bookSlug);

	if (!book) {
		return notFound();
	}

	// Grab all cookies
	const cookieStore = cookies();
	// and try to get the token
	// if the token exists, the user can write reviews
	// if not, the user can click a link to go to the login page
	const token = cookieStore.get("token");

	const notLoggedIn = (
		<LinkButton
			variant="primary"
			href={`/login?bookSlug=${params.bookSlug}&bookCategorySlug=${params.category}`}
			className="mt-10"
		>
			Log in to write a review
		</LinkButton>
	);

	return (
		<div className="prose col-span-full">
			<h1>{book.title}</h1>
			{book.reviews && <BookReviewList reviews={book.reviews} />}
			{token ? <BookReviewCreate bookSlug={params.bookSlug} /> : notLoggedIn}
		</div>
	);
}
