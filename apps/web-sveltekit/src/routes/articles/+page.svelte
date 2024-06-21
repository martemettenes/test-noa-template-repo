<script lang="ts">
	import { page } from "$app/stores";
	import Articles from "$lib/components/pageComponents/articlePageComponents/articles.svelte";
	import type { PageData } from "./$types";
	import SEO from "$lib/components/SEO.svelte";

	export let data: PageData;
</script>

<SEO
	pageType={"website"}
	title="All articles"
	description="A list of all articles"
	permalink={$page.url.pathname}
	publishDate={null}
/>
<Articles articles={data.articles} />
