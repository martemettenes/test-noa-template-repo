<script lang="ts">
	import type { Book } from "common/src/types/sanity/book";
	import BookCard from "./bookCard.svelte";

	export let books: Array<Book>;
</script>

<div class="flex flex-wrap justify-center gap-4 gap-y-14">
	{#each books as book}
		<BookCard {book} />
	{/each}
</div>
