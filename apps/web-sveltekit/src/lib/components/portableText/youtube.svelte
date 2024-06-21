<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import { FacadeYoutube } from "ui/svelte";

	export let portableText: CustomBlockComponentProps;
</script>

<FacadeYoutube url={portableText.value.url} />
