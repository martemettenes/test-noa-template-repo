import { schemaTypes } from "common/src/sanity/SchemaType";
import { hashString } from "common/src/utils/stringUtils";

/**
 * Creates the payload for the review to send to Sanity
 */
export function createPayload(bookId: string, userName: string, title: string, review: string, rating: number) {
	// Create a stable id.
	// This prevents duplicate reviews from being created
	// It also prevents the same user from creating multiple reviews for the same book
	const id = hashString(`review-${bookId}-${userName}`);

	return {
		_id: id,
		_type: schemaTypes.BOOK_REVIEW,
		bookRef: {
			_type: "reference",
			_ref: bookId,
		},
		author: userName,
		title,
		review,
		rating,
	};
}
