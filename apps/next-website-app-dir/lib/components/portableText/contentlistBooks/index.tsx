import ResponsiveCard from "../../responsiveCard";
import type { AccessibleImage } from "common/src/types/sanity/accessibleImage";
import type { PageItemContentListBooks } from "common/src/types/sanity/landingPage/pageItemContentList";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Button, Link } from "ui/react";

interface Props {
	data: PageItemContentListBooks;
}

const PageItemContentListBooksComp: React.FC<Props> = ({ data }) => {
	const { title, items } = data;

	const books = items.map((item) => {
		const image: AccessibleImage = item.coverImage;

		const body = (
			<>
				<Link href={`/books/${item.category.slug}`}>
					<Badge variant="neutral">{item.category.title}</Badge>
				</Link>
				<h3 className="card-title mt-0 @5xl:text-white">{item.title}</h3>
				<h4 className="@5xl:text-white">By: {item.authors.map((author) => author.lastName).join(", ")}</h4>
			</>
		);

		const actions = (
			<div className="flex items-center gap-4">
				<Button ariaLabel={`Add ${item.title} to cart`} variant="primary" buttonSize="md">
					<AiOutlineShoppingCart />
					Add to cart
				</Button>
				<Link href={`/books/${item.category.slug}/${item.slug}`}>Read more</Link>
			</div>
		);

		return (
			<li className="m-0 h-full list-none pl-0" key={item._id}>
				<ResponsiveCard image={image} body={body} actions={actions} />
			</li>
		);
	});

	return (
		<>
			<h2>{title}</h2>
			<ul className="flex flex-col gap-4 pl-0">{books}</ul>
		</>
	);
};
export default PageItemContentListBooksComp;
