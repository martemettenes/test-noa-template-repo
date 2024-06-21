<script lang="ts">
	import AuthorList from "./components/authorList.svelte";
	import Ratings from "./components/reviews/ratings.svelte";
	import { Badge, Link, SanityImage } from "ui/svelte";
	import type { Book } from "common/src/types/sanity/book";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";

	export let book: Book;

	const { title, publishYear, coverImage, authors, category, synopsis } = book;
</script>

<SanityImage
	className="rounded-box col-span-2 mt-0 w-full"
	config={getSanityConfig()}
	image={coverImage}
	alt={coverImage.alt ?? ""}
/>
<div class="prose col-span-3 col-start-3 flex flex-col lg:p-8 lg:pt-0">
	<div class="flex flex-col gap-4">
		<h1>
			{title} ({publishYear})
		</h1>
		<Link href={`/books/${category.slug}`}>
			<Badge size="lg">{category.title}</Badge>
		</Link>
		<div>
			<Ratings reviews={book.reviews} />
			<Link href={`/books/${category.slug}/${book.slug}/reviews`} className="text-sm">See all reviews</Link>
		</div>
		<h2>Synopsis</h2>
		<p>{synopsis}</p>
	</div>
	<AuthorList {authors} />
</div>
