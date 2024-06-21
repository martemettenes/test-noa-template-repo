<script lang="ts">
	// Imports
	import MainMenuItem from "./mainMenuItem.svelte";
	import type { MainMenu } from "common/src/types/sanity/allPages/mainMenu";

	// Props
	export let mainMenuData: MainMenu;
</script>

<header class="bg-base-200">
	<nav class="navbar mx-auto flex max-w-screen-2xl items-center justify-between px-4">
		<a class="font-bold" href="/">TEMPLATE REPO BOOKSTORE</a>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				{#each mainMenuData.menuItems as mainMenuItem}
					<MainMenuItem {mainMenuItem} />
				{/each}
			</ul>
		</div>
	</nav>
</header>
