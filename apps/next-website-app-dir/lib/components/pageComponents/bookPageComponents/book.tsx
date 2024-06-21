import AuthorList from "./components/AuthorsList";
import BookRatings from "./components/reviews/ratings";
import { sanityConfigClient } from "@/lib/config/envVariables";
import type { Book } from "common/src/types/sanity/book";
import React from "react";
import { Badge, Link, SanityImage } from "ui/react";

interface Props {
	data: Book;
}

/**
 * This component displays a book page
 */
export default function BookPageComponent({ data }: Props): JSX.Element {
	const { title, publishYear, coverImage, authors, category, synopsis } = data;

	const generalInfo = (
		<div className="flex flex-col gap-4">
			<h1>
				{title} ({publishYear})
			</h1>
			<Link href={`/books/${category.slug}`}>
				<Badge size="lg">{category.title}</Badge>
			</Link>
			<div>
				<BookRatings reviews={data.reviews} />
				<Link href={`/books/${category.slug}/${data.slug}/reviews`} className="text-sm">
					See all reviews
				</Link>
			</div>
			<h2>Synopsis</h2>
			<p>{synopsis}</p>
		</div>
	);

	return (
		<>
			<SanityImage
				className="col-span-2 mt-0 w-full rounded-box"
				config={sanityConfigClient}
				image={coverImage}
				alt={coverImage.alt ?? ""}
			/>
			<div className="prose col-span-3 col-start-3 flex flex-col lg:p-8 lg:pt-0">
				{generalInfo}
				<AuthorList authors={authors} />
			</div>
		</>
	);
}
