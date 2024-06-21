<script lang="ts">
	// imports
	import LandingPageSerializer from "$lib/components/landingPage/serializer.svelte";
	import type { LandingPageBase as HomePageType } from "common/src/types/sanity/landingPage";

	// props
	export let landingPageDocument: HomePageType;
</script>

<div class="mx-auto flex max-w-screen-2xl flex-col lg:grid lg:grid-cols-12 lg:gap-4 lg:px-4">
	<LandingPageSerializer landingPage={landingPageDocument} />
</div>
