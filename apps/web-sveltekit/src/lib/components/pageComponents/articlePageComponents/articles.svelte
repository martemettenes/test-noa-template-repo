<script lang="ts">
	import type { Article } from "common/src/types/sanity/article";
	import ArticleList from "./components/articleList.svelte";

	export let articles: Array<Article>;
</script>

<header>
	<h1>Our articles</h1>
</header>
<ArticleList {articles} />
