<script lang="ts">
	import type { Book } from "common/src/types/sanity/book";
	import { Button, Link, SanityImage, Badge, Card, CardBody, CardActions } from "ui/svelte";
	import { getSanityConfig } from "$lib/config/sanityConfigClient";
	import CartIcon from "ui/svelte/icons/cart.svelte";
	import BookRatings from "./reviews/ratings.svelte";

	export let book: Book;
</script>

<Card className="not-prose mx-4 w-full gap-3 sm:mx-0 sm:w-60">
	<Link href={`/books/${book.category.slug}/${book.slug}`}>
		<SanityImage
			config={getSanityConfig()}
			image={book.coverImage}
			alt={book.coverImage.alt ?? ""}
			className="rounded-box m-0 w-full shadow"
		/>
	</Link>

	<CardBody className="gap-0 p-0 leading-normal">
		<p class="m-0 truncate text-base font-thin uppercase">
			{book.authors.map((author) => author.lastName).join(", ")}
		</p>
		<Link href={`/books/${book.category.slug}/${book.slug}`} variant="hover" className="truncate font-bold">
			{book.title}
		</Link>
		<Link href={`/books/${book.category.slug}`}>
			<Badge>{book.category.title}</Badge>
		</Link>
	</CardBody>
	<BookRatings reviews={book.reviews} />
	<CardActions className="justify-start">
		<Button variant="primary" buttonSize="sm">
			<CartIcon className="w-6 h-6" />
			<span>Add to cart</span>
		</Button>
	</CardActions>
</Card>
