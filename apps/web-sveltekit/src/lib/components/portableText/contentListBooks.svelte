<script lang="ts">
	import type { PageItemContentListBooks } from "common/src/types/sanity/landingPage/pageItemContentList";
	import ContentList from "../landingPage/contentList/contentList.svelte";
	import ContentListCard from "../landingPage/contentList/contentListcard/contentListCard.svelte";
	import ContentListCardHeader from "../landingPage/contentList/contentListcard/contentListCardHeader.svelte";
	import ContentListCardBody from "../landingPage/contentList/contentListcard/contentListCardBody.svelte";
	import { Link, Badge, Button } from "ui/svelte";
	import ContentListCardActions from "../landingPage/contentList/contentListcard/contentListCardActions.svelte";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps<PageItemContentListBooks>;

	const { title, items } = portableText.value;
</script>

<ContentList {title} className="p-0">
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
