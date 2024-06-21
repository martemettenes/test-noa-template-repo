<script lang="ts">
	import { page } from "$app/stores";
	import Articles from "$lib/components/pageComponents/articlePageComponents/articles.svelte";
	import type { PageData } from "./$types";
	import SEO from "$lib/components/SEO.svelte";

	export let data: PageData;

	const collection = data.articles[0].collection;
</script>

<SEO
	pageType={"website"}
	title="All articles for {collection.name}"
	description={collection.description || ""}
	permalink={$page.url.pathname}
	publishDate={collection._createdAt}
/>
<Articles articles={data.articles} />
