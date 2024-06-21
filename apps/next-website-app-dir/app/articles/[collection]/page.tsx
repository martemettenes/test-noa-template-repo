import ResponsiveList from "@/lib/components/ResponsiveList";
import ResponsiveCard from "@/lib/components/responsiveCard";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getAllArticlesForCollection } from "common/src/content/sanity/articles";
import { Badge, Link, LinkButton } from "ui/react";

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const allArticlePageDocuments = await getData(params.collection);
	if (allArticlePageDocuments.length < 1) {
		return null;
	}
	// Grab the collection object (all collections are the same for
	// Note: All documents since we are filtering on the collection slug)
	const collectionObj = allArticlePageDocuments[0].collection;
	return {
		title: `A list of articles in the «${collectionObj.name}» collection`,
		description: `A list of all articles in the «${collectionObj.name}» collection`,
	};
}

async function getData(collection: string) {
	const allArticles = await getAllArticlesForCollection(sanityConfigServer, collection);
	return allArticles;
}

interface Params {
	collection: string;
}

export default async function ArticleCollectionListPage({ params }: { params: Params }) {
	const allArticlePageDocuments = await getData(params.collection);

	if (allArticlePageDocuments.length < 1) {
		return <h1>No articles found</h1>;
	}

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
				<h1>{allArticlePageDocuments[0].collection.name} articles</h1>
				<ResponsiveList>{articles}</ResponsiveList>
			</div>
		</section>
	);
}
