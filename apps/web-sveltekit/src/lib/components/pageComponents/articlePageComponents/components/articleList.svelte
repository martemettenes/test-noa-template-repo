<script lang="ts">
	import type { Article } from "common/src/types/sanity/article";
	import ArticleCard from "./articleCard.svelte";

	export let articles: Array<Article>;
</script>

<div class="flex flex-wrap justify-center gap-4 gap-y-14">
	{#each articles as article}
		<ArticleCard {article} />
	{/each}
</div>
