<script lang="ts">
	import { Link, SanityImage, Badge, Card, CardBody } from "ui/svelte";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";
	import type { Article } from "common/src/types/sanity/article";

	export let article: Article;

	const articleUrl = `/articles/${article.collection.path.current}/${article.slug}`;
</script>

<Card className="not-prose mx-4 w-full gap-3 sm:mx-0 sm:w-60">
	<Link href={articleUrl}>
		<SanityImage
			config={getSanityConfig()}
			image={article.articlePreviewImage}
			alt={article.articlePreviewImage.alt ?? ""}
			className="rounded-box m-0 w-full aspect-[9/16] object-cover"
		/>
	</Link>

	<CardBody className="gap-4 p-0 leading-normal">
		<Link href={`/articles/${article.collection.path.current}`}>
			<Badge>{article.collection.name}</Badge>
		</Link>
		<Link href={articleUrl} variant="hover" className="truncate font-bold">
			{article.title}
		</Link>
		<p>{article.summary.slice(0, 120) + "..."}</p>
	</CardBody>
</Card>
