<script lang="ts">
	import type { Author } from "common/src/types/sanity/book";
	import { SanityImage } from "ui/svelte";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";

	export let author: Author;
</script>

<li class="mt-0 list-none rounded-box bg-base-200 px-8 py-4">
	<div class="mt-0 flex items-center gap-4">
		<div class="avatar h-20 w-20">
			<SanityImage
				className="m-0 rounded-full"
				config={getSanityConfig()}
				image={author.image}
				alt={author.image.alt ?? ""}
			/>
		</div>
		<div>
			<h3 class="m-0">
				{author.firstName}
				{author.lastName}
			</h3>
			<span>Author</span>
		</div>
	</div>
	<p class="mb-0 font-medium italic">{author.description}</p>
</li>
