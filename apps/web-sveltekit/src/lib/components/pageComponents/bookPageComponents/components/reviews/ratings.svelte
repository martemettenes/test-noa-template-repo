<script lang="ts">
	import type { Review } from "common/src/types/sanity/book";
	import StarIcon from "ui/svelte/icons/star.svelte";

	// Props
	export let reviews: Array<Review> | undefined = undefined;

	// Figure out the average rating for the book
	let averageRating = 0;
	if (Array.isArray(reviews) && reviews.length > 0) {
		averageRating = Math.ceil(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length);
	}
</script>

<div class="flex">
	{#each { length: 5 } as _, i}
		{#if i < averageRating}
			<StarIcon className="w-6 h-6" fillColor="orange" />
		{:else}
			<StarIcon className="w-6 h-6" />
		{/if}
	{/each}
</div>
