<script lang="ts">
	import type { PageItemContentListCategories } from "common/src/types/sanity/landingPage/pageItemContentList";
	import ContentList from "./contentList.svelte";

	export let data: PageItemContentListCategories;

	const { title, items } = data;
</script>

<ContentList {title}>
	{#each items as category}
		<li class="list-none pl-0">
			<a
				href={`/books/${category.slug}`}
				class="card m-0 flex items-center justify-center bg-primary bg-opacity-60 p-8 no-underline"
			>
				<h3 class="m-0">{category.title}</h3>
			</a>
		</li>
	{/each}
</ContentList>
