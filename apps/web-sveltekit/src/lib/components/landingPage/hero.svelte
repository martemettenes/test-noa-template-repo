<script lang="ts">
	// imports
	import type { PageItemHero } from "common/src/types/sanity/landingPage/pageItemHero";
	import { cn } from "common/src/utils/cn";
	import { Link, LinkButton } from "ui/svelte";
	import SanityImage from "ui/svelte/SanityImage/sanityImage.svelte";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";
	// props
	export let heroData: PageItemHero;

	const { bodyText, callToActionLabel, callToActionType, callToActionUrl, heroImage, layout, purpose, title } =
		heroData;

	const sectionClass = cn(
		"col-span-full flex items-center justify-between gap-8 px-4 py-8 max-lg:flex-col-reverse lg:p-16",
		{
			"flex-row-reverse": layout === "imageLeft",
		}
	);

	const bodyTextClass = cn(purpose === "header" ? "text-lg" : "text-base");
</script>

<section class={sectionClass}>
	<div class="prose max-lg:text-center">
		{#if purpose === "header"}
			<h1>{title}</h1>
		{:else if purpose === "section"}
			<h2>{title}</h2>
		{/if}
		<p class={bodyTextClass}>{bodyText}</p>
		{#if callToActionType === "button"}
			<LinkButton
				buttonSize={purpose === "header" ? "lg" : "md"}
				variant={purpose === "header" ? "primary" : "secondary"}
				href={callToActionUrl}
			>
				{callToActionLabel}
			</LinkButton>
		{:else}
			<Link href={callToActionUrl}>{callToActionLabel}</Link>
		{/if}
	</div>
	<SanityImage
		className="rounded-box aspect-[4/3] max-w-xl object-cover shadow-2xl max-lg:w-full"
		config={getSanityConfig()}
		image={heroImage}
		alt={heroImage.alt ?? ""}
	/>
</section>
