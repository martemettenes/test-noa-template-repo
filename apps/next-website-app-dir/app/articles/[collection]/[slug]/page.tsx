import ArticleComponent from "@/lib/components/pageComponents/articlePageComponent";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getArticleBySlug } from "common/src/content/sanity/articles";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const preview = draftMode().isEnabled ? true : false;
	const article = await getData(preview, params.collection, params.slug);
	if (!article) {
		return null;
	}
	return {
		title: article.title,
		description: article.description,
	};
}

async function getData(preview: boolean, collection: string, slug: string) {
	const page = await getArticleBySlug(sanityConfigServer, preview, collection, slug);
	return page;
}

interface Params {
	collection: string;
	slug: string;
}

export default async function ArticlePage({ params }: { params: Params }) {
	const preview = draftMode().isEnabled ? true : false;
	const article = await getData(preview, params.collection, params.slug);

	if (!article) {
		notFound();
	}

	return <ArticleComponent articlePageDocument={article} />;
}
