<script lang="ts">
	import { LinkButton } from "ui/svelte";

	// props
	export let numBooks: number;
	export let totalNumBooks: number;

	$: nextSetOfBooks = Math.min(numBooks + 10, totalNumBooks);
</script>

<div class="mt-10 flex flex-col items-center gap-2">
	<p class="m-0 text-sm">
		Showing {numBooks} of {totalNumBooks} books
	</p>
	<LinkButton href={`/books?numBooks=${nextSetOfBooks}`} noScroll={true}>See more books</LinkButton>
</div>
