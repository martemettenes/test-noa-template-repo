<script lang="ts">
	import { serializeSchema, config } from "$lib/utils/seo";

	// Props
	export let pageType: "website" | "article";
	export let title: string;
	export let description: string;
	export let permalink: string;
	export let publishDate: string | null;

	const fullTitle = config.title(title);
	const fullUrl = config.url(permalink);
	const type = pageType || "website";
	const jsonObj = {
		"@context": "http://schema.org",
		"@type": "WebPage",
		headline: fullTitle,
		url: fullUrl,
		name: title,
		author: {
			"@type": "Person",
			name: "Noa Ignite",
		},
		description,
	};
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content={type} />
	<meta content={fullTitle} property="og:title" />
	<meta content={description} property="og:description" />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:site_name" content="NoA Ignite SvelteKit Demo" />
	{#if publishDate}
		<meta property="article:published_time" content={publishDate} />
	{/if}
	{@html serializeSchema(jsonObj)}
</svelte:head>
