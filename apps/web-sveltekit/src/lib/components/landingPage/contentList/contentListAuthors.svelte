<script lang="ts">
	import type { PageItemContentListAuthors } from "common/src/types/sanity/landingPage/pageItemContentList";
	import ContentList from "./contentList.svelte";
	import SanityImage from "ui/svelte/SanityImage/sanityImage.svelte";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";

	export let data: PageItemContentListAuthors;

	const { title, items } = data;
</script>

<ContentList {title}>
	{#each items as author}
		<li class="list-none pl-0">
			<div class="card glass bordered m-0 h-full rounded-xl bg-base-300 bg-opacity-20 p-8 @container">
				<div class="m-0 flex items-center gap-4">
					<div class="avatar m-0 aspect-square h-20">
						<SanityImage
							className="m-0 rounded-full"
							config={getSanityConfig()}
							image={author.image}
							alt={author.image.alt ?? ""}
						/>
					</div>
					<h3 class="m-0">
						{author.firstName}
						{author.lastName}
					</h3>
				</div>
			</div>
		</li>
	{/each}
</ContentList>
