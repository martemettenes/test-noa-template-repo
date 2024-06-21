<script lang="ts">
	import { page } from "$app/stores";
	import Article from "$lib/components/pageComponents/articlePageComponents/article.svelte";
	import type { PageData } from "./$types";
	import SEO from "$lib/components/SEO.svelte";

	export let data: PageData;
</script>

<SEO
	pageType={"website"}
	title={data.article?.title || "Article"}
	description={data.article?.description || ""}
	permalink={$page.url.pathname}
	publishDate={data.article?._createdAt || null}
/>
<Article article={data.article} />
