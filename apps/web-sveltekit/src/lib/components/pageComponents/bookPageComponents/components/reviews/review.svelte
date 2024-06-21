<script lang="ts">
	import type { Review } from "common/src/types/sanity/book";
	import BookRatings from "./ratings.svelte";

	export let review: Review;
</script>

<div>
	<h3>{review.title}</h3>
	<p>by: {review.author}</p>
	<BookRatings reviews={[review]} />
	<p>{review.review}</p>
</div>
