<script lang="ts">
	import type { Author as AuthorType } from "common/src/types/sanity/book";
	import Author from "./author.svelte";

	export let authors: Array<AuthorType>;
</script>

<h2>{`Author${authors.length > 1 ? "s" : ""}`}</h2>
<ul class="flex flex-col gap-4 pl-0">
	{#each authors as author}
		<Author {author} />
	{/each}
</ul>
