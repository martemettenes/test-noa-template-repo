<script lang="ts">
	import BookList from "./components/bookList.svelte";
	import BookListFooter from "./components/bookListFooter.svelte";
	import type { Book } from "common/src/types/sanity/book";

	export let books: Array<Book>;
	export let totalNumBooks: number;
</script>

<header>
	<h1>Our books</h1>
	<p>Where Stories Come to Life</p>
</header>
<BookList {books} />
{#if books.length < totalNumBooks}
	<BookListFooter {totalNumBooks} numBooks={books.length} />
{/if}
