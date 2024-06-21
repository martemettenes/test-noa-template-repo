<script lang="ts">
	import { cn } from "common/src/utils/cn";
	import SanityImage from "ui/svelte/SanityImage/sanityImage.svelte";
	import type { AccessibleImage } from "common/src/types/sanity/accessibleImage";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";

	export let image: AccessibleImage;
</script>

<SanityImage
	{image}
	alt={image.alt ?? ""}
	config={getSanityConfig()}
	className={cn(
		"m-0 aspect-square rounded-t-xl object-cover",
		//container queries
		"@xl:aspect-[9/16] @xl:w-56 @xl:rounded-bl-xl @xl:rounded-tr-none",
		"@3xl:aspect-square @3xl:w-1/2",
		"@5xl:absolute @5xl:left-0 @5xl:top-0 @5xl:h-full @5xl:w-full @5xl:rounded-xl @5xl:rounded-tr-xl"
	)}
/>
