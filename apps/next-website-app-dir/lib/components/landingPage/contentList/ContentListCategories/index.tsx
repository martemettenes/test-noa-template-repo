import ResponsiveList from "../../../ResponsiveList";
import ContentListContainer from "../components/ContentListContainer";
import type { PageItemContentListCategories } from "common/src/types/sanity/landingPage/pageItemContentList";
import Link from "next/link";
import React from "react";

interface Props {
	data: PageItemContentListCategories;
}

const ContentListCategories: React.FC<Props> = ({ data }) => {
	const { title, items } = data;

	const categories = items.map((category) => (
		<li key={category._id} className="m-0 h-full list-none pl-0">
			<Link
				href={`/books/${category.slug}`}
				className="card m-0 flex items-center justify-center bg-primary bg-opacity-60 p-8 no-underline"
			>
				<h3 className="m-0">{category.title}</h3>
			</Link>
		</li>
	));

	return (
		<ContentListContainer>
			<h2>{title}</h2>
			<ResponsiveList>{categories}</ResponsiveList>
		</ContentListContainer>
	);
};
export default ContentListCategories;
