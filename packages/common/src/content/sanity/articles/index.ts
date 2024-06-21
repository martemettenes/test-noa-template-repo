import groq from "groq";

import type { SanityConfigServer } from "../../../clients/config";
import { getSanityClient } from "../../../clients/sanityClient";
import { schemaTypes } from "../../../sanity/SchemaType";
import type { Article } from "../../../types/sanity/article";
import { articleFields } from "./common";

/**
 * Returns all articles (no drafts) for listing
 * @returns
 */
export async function getAllArticles(config: SanityConfigServer): Promise<Array<Article>> {
	const query = groq`*[_type == "${schemaTypes.PAGE_ARTICLE}"] | order(_createdAt desc) {
		${articleFields}
	}`;
	const articles = await getSanityClient(config).fetch<Array<Article>>(query);
	return articles;
}

/**
 * Returns all articles in a collection (no drafts)
 * @param collection
 * @returns
 */
export async function getAllArticlesForCollection(
	config: SanityConfigServer,
	collection: string
): Promise<Array<Article>> {
	const query = groq`*[_type == "${schemaTypes.PAGE_ARTICLE}" && collection->.path.current == $collection] {
		${articleFields}
	}`;
	const articles = await getSanityClient(config).fetch<Array<Article>>(query, {
		collection,
	});
	return articles;
}

/**
 * Returns one or two articles (draft included) based on the passed slug
 * @param preview
 * @param slug
 * @returns
 */
export async function getArticleBySlug(
	config: SanityConfigServer,
	preview: boolean,
	collection: string,
	slug: string
): Promise<Article> {
	const query = groq`*[_type == "${schemaTypes.PAGE_ARTICLE}" && collection->.path.current == $collection && slug.current == $slug][0]{
		${articleFields}
	}`;
	const article = await getSanityClient(config, preview).fetch<Article>(query, { slug, collection });
	return article;
}

export async function getAllArticlesForSitemap(
	config: SanityConfigServer
): Promise<Array<{ slug: string; lastModified: string }>> {
	const query = groq`*[_type == "${schemaTypes.PAGE_ARTICLE}"] {
		"slug": slug.current,
		"collection": collection->.path.current,
		"lastModified": coalesce(_updatedAt, _createdAt)
	}`;
	const data =
		await getSanityClient(config).fetch<Array<{ slug: string; collection: string; lastModified: string }>>(query);
	return data.map((article) => {
		return {
			...article,
			slug: `articles/${article.collection}/${article.slug}`,
		};
	});
}
