import BookRatings from "./ratings";
import { Review } from "common/src/types/sanity/book";

interface Props {
	review: Review;
}

export default function BookReview({ review }: Props) {
	return (
		<div>
			<h3>{review.title}</h3>
			<p>by: {review.author}</p>
			<BookRatings reviews={[review]} />
			<p>{review.review}</p>
		</div>
	);
}
