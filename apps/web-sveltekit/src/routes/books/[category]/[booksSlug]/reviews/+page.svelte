<script lang="ts">
	import type { PageData } from "./$types";
	import type { ActionData } from "./$types";
	import { enhance } from "$app/forms";

	import { LinkButton, Alert, Button } from "ui/svelte";
	import BookReviewList from "$lib/components/pageComponents/bookPageComponents/components/reviews/reviewList.svelte";

	// Props
	export let data: PageData;
	export let form: ActionData;

	// State
	let loading = false;
	let rating = 0;
</script>

<div class="prose col-span-full">
	<h1>{data.book.title}</h1>
	{#if data.book.reviews}
		<BookReviewList reviews={data.book.reviews} />
	{:else}
		<p>No reviews yet</p>
	{/if}
	{#if !data.isLoggedIn}
		<!-- Not logged in -->
		<LinkButton
			variant="primary"
			href={`/login?bookSlug=${data.book.slug}&bookCategorySlug=${data.book.category.slug}`}
			className="mt-10"
		>
			Log in to write a review
		</LinkButton>
	{:else}
		<!-- Logged in -->
		<div class="mx-auto mt-10 max-w-none">
			<h2>Write a review</h2>
			<div class="flex max-w-md flex-col gap-4">
				{#if form?.errorMessage}
					<!-- Error -->
					<Alert alertType="error">{form.errorMessage}</Alert>
				{:else if form?.success}
					<!-- Success -->
					<Alert alertType="info">Review submitted successfully. Refresh the page to see it.</Alert>
				{/if}

				<form method="POST" use:enhance>
					<div class="flex items-center gap-4 rounded-md border p-4 {rating < 1 ? 'border-red-600' : ''}">
						<div class="rating flex">
							{#each { length: 5 } as _, i}
								<input
									type="radio"
									name="rating"
									value={i + 1}
									checked={rating === i + 1}
									class="mask mask-star"
									on:click={() => (rating = i + 1)}
								/>
							{/each}
						</div>
						<span class="ml-2">Select the rating ({rating} of 5)</span>
					</div>
					<div class="form-control min-w-[400px]">
						<label class="label" for="title">
							<span class="label-text">Review title</span>
						</label>
						<input
							id="title"
							name="title"
							required
							minLength={5}
							type="text"
							placeholder="The review title"
							class="input input-bordered w-full invalid:border-red-600"
						/>
					</div>
					<div class="form-control">
						<label class="label" for="body">
							<span class="label-text">Review text</span>
						</label>
						<textarea
							id="body"
							name="body"
							required
							minLength={10}
							class="textarea textarea-bordered h-24 invalid:border-red-600"
							placeholder="Type your review"
						></textarea>
					</div>

					<Button className="mt-4" disabled={loading}>Submit review</Button>
				</form>
			</div>
		</div>
	{/if}
</div>
