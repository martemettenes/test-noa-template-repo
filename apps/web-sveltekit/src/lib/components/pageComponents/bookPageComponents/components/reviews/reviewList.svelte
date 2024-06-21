<script lang="ts">
	import BookReview from "./review.svelte";
	import type { Review } from "common/src/types/sanity/book";

	export let reviews: Array<Review>;

	// Sort the reviews by date (newest first)
	$: sortedReviews = reviews.sort((a, b) => {
		const aDate = new Date(a._createdAt);
		const bDate = new Date(b._createdAt);
		return bDate.getTime() - aDate.getTime();
	});
</script>

<div>
	<h2>Reviews</h2>
	{#if sortedReviews.length < 1}
		<p>There are no reviews for this book yet.</p>
	{/if}
	<div>
		{#each sortedReviews as review}
			<BookReview {review} />
		{/each}
	</div>
</div>
