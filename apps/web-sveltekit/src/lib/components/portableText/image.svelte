<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import type { AccessibleImage } from "common/src/types/sanity/accessibleImage";
	import SanityImage from "ui/svelte/SanityImage/sanityImage.svelte";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";

	// props
	export let portableText: CustomBlockComponentProps<AccessibleImage>;
</script>

<figure>
	<SanityImage
		className="rounded-box m-0 aspect-video w-full"
		config={getSanityConfig()}
		image={portableText.value}
		alt={portableText.value.alt || ""}
	/>
	<figcaption class="m-0 mt-4 text-center text-sm">{portableText.value.caption || ""}</figcaption>
</figure>
