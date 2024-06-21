<script lang="ts">
	import Footer from "$lib/components/footer/footer.svelte";
	import MainMenu from "$lib/components/mainMenu/mainMenu.svelte";
	import "../app.css";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<div class="flex min-h-screen flex-col">
	{#if data.preview}
		<div class="flex h-10 w-full items-center justify-center gap-5 bg-yellow-600">
			<p>Preview mode active</p>
			<!-- data-sveltekit-reload is needed here since we are linking to an api route -->
			<a href="/api/exit-preview" class="underline" data-sveltekit-reload>Exit preview</a>
		</div>
	{/if}
	<MainMenu mainMenuData={data.headerAndFooterData.mainMenu} />
	<main class="flex-1"><slot /></main>
	<Footer footerData={data.headerAndFooterData.footer} />
</div>
