<script lang="ts">
	// imports
	import type { PageItemCallToActionBar } from "common/src/types/sanity/landingPage/pageItemCallToActionBar";
	import { cn } from "common/src/utils/cn";
	import { LinkButton } from "ui/svelte";

	// props
	export let ctaBarData: PageItemCallToActionBar;

	const { bodyText, callToActionLabel, callToActionUrl, background } = ctaBarData;

	const containerClass = cn("rounded-box flex flex-col items-center justify-center p-8 text-center", {
		"bg-primary bg-opacity-20": background === "solid",
		"glass bg-primary bg-opacity-20": background === "glass",
	});
</script>

<section class="col-span-full px-4 py-10">
	<div class={containerClass}>
		<div class="prose">
			<p class="text-xl font-medium">{bodyText}</p>
			<LinkButton href={callToActionUrl} className="btn btn-primary mt-4 no-underline"
				>{callToActionLabel}</LinkButton
			>
		</div>
	</div>
</section>
