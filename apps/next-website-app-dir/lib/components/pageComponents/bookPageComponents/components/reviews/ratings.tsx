import { Review } from "common/src/types/sanity/book";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
	reviews?: Array<Review>;
}

/**
 * Displays the average rating for a book
 */
export default function BookRatings({ reviews }: Props) {
	// Figure out the average rating for the book
	let averageRating = 0;
	let reviewStars = [];

	if (Array.isArray(reviews) && reviews.length > 0) {
		averageRating = Math.ceil(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length);
	}

	// Represent the average rating as stars
	for (let i = 0; i < 5; i++) {
		if (i < averageRating) {
			reviewStars.push(<AiFillStar />);
		} else {
			reviewStars.push(<AiOutlineStar />);
		}
	}

	return <div className="flex">{reviewStars}</div>;
}
