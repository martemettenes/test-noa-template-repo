<script lang="ts">
	import type { PageData } from "./$types";
	import Categories from "$lib/components/pageComponents/bookPageComponents/categories.svelte";

	export let data: PageData;
</script>

<Categories books={data.books} />
