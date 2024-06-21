<script lang="ts">
	// imports
	import CallToActionBar from "./callToActionBar.svelte";
	import Hero from "./hero.svelte";
	import { schemaTypes } from "common/src/sanity/SchemaType";
	import type { LandingPageBase } from "common/src/types/sanity/landingPage";
	import ContentListBooks from "./contentList/contentListBooks.svelte";
	import ContentListCategories from "./contentList/contentListCategories.svelte";
	import ContentListAuthors from "./contentList/contentListAuthors.svelte";

	// props
	export let landingPage: LandingPageBase;
</script>

{#each landingPage.pageItems as pageItem}
	{#if pageItem._type === schemaTypes.LANDING_PAGE_ITEM_HERO}
		<Hero heroData={pageItem} />
	{:else if pageItem._type === schemaTypes.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR}
		<CallToActionBar ctaBarData={pageItem} />
	{:else if pageItem._type === schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS}
		<ContentListBooks data={pageItem} />
	{:else if pageItem._type === schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_CATEGORIES}
		<ContentListCategories data={pageItem} />
	{:else if pageItem._type === schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_AUTHORS}
		<ContentListAuthors data={pageItem} />
	{:else}
		<p>Fallback component</p>
	{/if}
{/each}
