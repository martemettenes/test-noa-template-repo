<script lang="ts">
	import { components } from "../../portableText/components";
	import { PortableText } from "@portabletext/svelte";
	import type { Article } from "common/src/types/sanity/article";
	import SanityImage from "ui/svelte/SanityImage/sanityImage.svelte";
	import { Badge } from "ui/svelte";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";

	export let article: Article;
</script>

<div class="container prose mx-auto px-4 py-20">
	<div>
		<SanityImage
			className="rounded-box m-0 mb-4 aspect-video object-cover"
			config={getSanityConfig()}
			image={article.articlePreviewImage}
			alt={article.articlePreviewImage.alt ?? ""}
		/>
		<Badge size="lg" variant="primary">
			{article.collection.name}
		</Badge>
	</div>
	<h1 class="mt-8">{article.title}</h1>
	<div>
		<p class="text-lg font-medium">{article.summary}</p>
	</div>
	<PortableText value={article.blocks.body} {components} />
</div>
