<script lang="ts">
	// Imports
	import { schemaTypes } from "common/src/sanity/SchemaType";
	import type { MainMenuItem, MainMenuActionItem } from "common/src/types/sanity/allPages/mainMenu";

	// Props
	export let mainMenuItem: MainMenuItem | MainMenuActionItem;

	// Pick the icon for the menu item
	let icon = `🏠`;
	if (mainMenuItem._type === schemaTypes.MAIN_MENU_ACTION_ITEM_OBJECT) {
		const typedItem = mainMenuItem as MainMenuActionItem;
		if (typedItem.icon === "document") {
			icon = `📄`;
		} else if (typedItem.icon === "newspaper") {
			icon = `📰`;
		}
	}
</script>

{#if mainMenuItem._type === schemaTypes.MAIN_MENU_ACTION_ITEM_OBJECT}
	<li>
		<a href={mainMenuItem.url}>{mainMenuItem.label}</a>
	</li>
{:else}
	<li tabIndex={0}>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a>
			{mainMenuItem.label}
			<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
				<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
			</svg>
		</a>
		<ul class="bg-base-200 p-2">
			{#each mainMenuItem.subItems as subItem}
				{#if subItem.url.startsWith("http")}
					<li>
						<a href={subItem.url} target="_blank" rel="noreferrer">
							{subItem.label}
						</a>
					</li>
				{:else}
					<li>
						<a href={subItem.url}>{subItem.label}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</li>
{/if}
