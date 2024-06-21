import BookRatings from "./reviews/ratings";
import { sanityConfigClient } from "@/lib/config/envVariables";
import { Book } from "common/src/types/sanity/book";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Button, Card, Link, SanityImage } from "ui/react";

interface Props {
	book: Book;
}

/**
 * Displays a book card
 */
export default function BookCard({ book }: Props) {
	return (
		<Card className="not-prose mx-4 w-full gap-3 sm:mx-0 sm:w-60">
			<Link href={`/books/${book.category.slug}/${book.slug}`}>
				<SanityImage
					config={sanityConfigClient}
					image={book.coverImage}
					alt={book.coverImage.alt ?? ""}
					className="m-0 w-full rounded-box shadow"
				/>
			</Link>

			<Card.Body className="gap-0 p-0 leading-normal">
				<p className="m-0 truncate text-base font-thin uppercase">
					{book.authors.map((author) => author.lastName).join(", ")}
				</p>
				<Link href={`/books/${book.category.slug}/${book.slug}`} variant="hover" className="truncate font-bold">
					{book.title}
				</Link>
				<Link href={`/books/${book.category.slug}`}>
					<Badge>{book.category.title}</Badge>
				</Link>
			</Card.Body>
			<BookRatings reviews={book.reviews} />
			<Card.Actions className="justify-start">
				<Button ariaLabel="Add to cart" variant="primary" buttonSize="sm">
					<AiOutlineShoppingCart />
					<span>Add to cart</span>
				</Button>
			</Card.Actions>
		</Card>
	);
}
