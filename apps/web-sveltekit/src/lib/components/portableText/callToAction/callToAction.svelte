<script lang="ts">
	import LinkComp from "./linkComp.svelte";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import { PortableText } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps;
</script>

<div class="card m-0 flex flex-col gap-4 rounded-xl bg-secondary bg-opacity-20 p-8 text-left">
	<h2 class="mt-0">{portableText.value.title}</h2>
	<PortableText value={portableText.value.bodyBlock} components={{ marks: { link: LinkComp } }} />
	<a class="btn btn-secondary w-fit text-white no-underline" href={portableText.value.callToActionButton.url}>
		{portableText.value.callToActionButton.label}
	</a>
</div>
