<script lang="ts">
	import { page } from "$app/stores";
	import SEO from "$lib/components/SEO.svelte";
	import LandingPageComponent from "$lib/components/pageComponents/landingPageComponent.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<SEO
	pageType={"website"}
	title={data.page.title}
	description={data.page.description}
	permalink={$page.url.pathname}
	publishDate={data.page._createdAt}
/>
<LandingPageComponent landingPageDocument={data.page} />
