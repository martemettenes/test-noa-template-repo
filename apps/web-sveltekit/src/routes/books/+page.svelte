<script lang="ts">
	import type { PageData } from "./$types";
	import Books from "$lib/components/pageComponents/bookPageComponents/books.svelte";

	export let data: PageData;
</script>

<Books books={data.books} totalNumBooks={data.totalNumBooks} />
