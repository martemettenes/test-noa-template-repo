<script lang="ts">
	import type { PageItemContentListBooks } from "common/src/types/sanity/landingPage/pageItemContentList";
	import ContentList from "./contentList.svelte";
	import ContentListCard from "./contentListcard/contentListCard.svelte";
	import ContentListCardHeader from "./contentListcard/contentListCardHeader.svelte";
	import ContentListCardBody from "./contentListcard/contentListCardBody.svelte";
	import { Link, Badge, Button } from "ui/svelte";
	import ContentListCardActions from "./contentListcard/contentListCardActions.svelte";

	export let data: PageItemContentListBooks;

	const { title, items } = data;
</script>

<ContentList {title}>
	{#each items as book}
		<li class="list-none pl-0">
			<ContentListCard>
				<ContentListCardHeader image={book.coverImage} />
				<ContentListCardBody>
					<div>
						<Link href={`/books/${book.category.slug}`}>
							<Badge variant="neutral">{book.category.title}</Badge>
						</Link>
						<h3 class="card-title mt-0 @5xl:text-white">{book.title}</h3>
						<h4 class="@5xl:text-white">By: {book.authors.map((author) => author.lastName).join(", ")}</h4>
					</div>
					<ContentListCardActions>
						<div class="flex items-center gap-4">
							<Button variant="primary" buttonSize="md">Add to cart</Button>
							<Link href={`/books/${book.category.slug}/${book.slug}`}>Read more</Link>
						</div>
					</ContentListCardActions>
				</ContentListCardBody>
			</ContentListCard>
		</li>
	{/each}
</ContentList>
