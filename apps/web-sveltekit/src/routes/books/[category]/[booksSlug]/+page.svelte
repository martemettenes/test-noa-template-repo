<script lang="ts">
	import type { PageData } from "./$types";
	import BookPageComponent from "$lib/components/pageComponents/bookPageComponents/book.svelte";

	export let data: PageData;
</script>

<BookPageComponent book={data.book} />
