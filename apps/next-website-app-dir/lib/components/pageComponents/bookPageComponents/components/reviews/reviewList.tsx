import BookReview from "./review";
import { Review } from "common/src/types/sanity/book";

interface Props {
	reviews: Array<Review>;
}

export default function BookReviewList({ reviews }: Props) {
	// Sort the reviews by date (newest first)
	const sortedReviews = reviews.sort((a, b) => {
		const aDate = new Date(a._createdAt);
		const bDate = new Date(b._createdAt);
		return bDate.getTime() - aDate.getTime();
	});

	return (
		<div>
			<h2>Reviews</h2>
			{sortedReviews.length < 1 && <p>There are no reviews for this book yet.</p>}
			<div>
				{sortedReviews.map((review) => (
					<BookReview key={review._id} review={review} />
				))}
			</div>
		</div>
	);
}
