import ResponsiveList from "@/lib/components/ResponsiveList";
import ResponsiveCard from "@/lib/components/responsiveCard";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getAllArticles } from "common/src/content/sanity/articles";
import { Badge, Link, LinkButton } from "ui/react";

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata() {
	return {
		title: "All articles",
		description: `A list of all articles`,
	};
}

async function getData() {
	const allArticles = await getAllArticles(sanityConfigServer);
	return allArticles;
}

export default async function ArticleListPage() {
	const allArticlePageDocuments = await getData();

	const articles = allArticlePageDocuments.map((article) => {
		const image = article.articlePreviewImage;

		const body = (
			<div>
				<Link href={`/articles/${article.collection.path.current}`}>
					<Badge>{article.collection.name}</Badge>
				</Link>
				<h2 className="mt-2">{article.title}</h2>
				<p>{article.summary.slice(0, 100)}...</p>
			</div>
		);

		const actions = (
			<>
				<LinkButton variant="primary" href={`articles/${article.collection.path.current}/${article.slug}`}>
					Read more
				</LinkButton>
			</>
		);

		return (
			<li className="m-0 list-none pl-0" key={article._id}>
				<ResponsiveCard image={image} body={body} actions={actions} />
			</li>
		);
	});

	return (
		<section className="prose max-w-none">
			<div className="mx-auto max-w-screen-2xl px-4 py-20">
				<h1>Articles</h1>
				<ResponsiveList>{articles}</ResponsiveList>
			</div>
		</section>
	);
}
