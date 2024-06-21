<script lang="ts">
	import SEO from "$lib/components/SEO.svelte";
	import LandingPageComponent from "$lib/components/pageComponents/landingPageComponent.svelte";
	import { config } from "$lib/utils/seo";
	import type { PageData } from "./$types";

	// props
	export let data: PageData;
</script>

<SEO pageType={"website"} title="Home page" description={config.description} permalink="" publishDate={null} />
<LandingPageComponent landingPageDocument={data.homePageData} />
