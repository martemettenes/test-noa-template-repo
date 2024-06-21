<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps;
</script>

<a class="underline" href={portableText.value.href}><slot /></a>
