<script lang="ts">
	import type { Book } from "common/src/types/sanity/book";
	import BookList from "./components/bookList.svelte";

	export let books: Array<Book>;

	// All of the passed books have the same category
	// since this is a category page component
	const category = books[0].category;
</script>

<header>
	<h1>{category.title}</h1>
</header>
<BookList {books} />
