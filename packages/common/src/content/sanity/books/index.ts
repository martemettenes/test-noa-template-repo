import groq from "groq";

import type { SanityConfigServer } from "../../../clients/config";
import { getSanityClient } from "../../../clients/sanityClient";
import { schemaTypes } from "../../../sanity/SchemaType";
import type { Book, Category } from "../../../types/sanity/book";

// Fields to return for a book object
export const bookFields = groq`
...,
category-> {
  ...,
  "slug": slug.current
},
"slug": slug.current,
authors[]->,
"reviews": *[_type == "${schemaTypes.BOOK_REVIEW}" && bookRef._ref == ^._id]
`;

/**
 * Fetches books as an array of Book objects
 * The number of books returned can be limited by the limitTo parameter
 * it will default to 10 if not specified
 * @param config Sanity config
 */
export async function getBooks(config: SanityConfigServer, limitTo = 10): Promise<Array<Book>> {
	const query = groq`*[_type == "${schemaTypes.BOOK}"] | order(_createdAt desc) [0...${limitTo}] {
		${bookFields}
	}`;
	const books = await getSanityClient(config).fetch<Array<Book>>(query);
	return books;
}

/**
 * Returns the total number of books (no drafts)
 * @param config Sanity config
 */
export async function getBookCount(config: SanityConfigServer): Promise<number> {
	const query = groq`count(*[_type == "${schemaTypes.BOOK}"])`;
	const count = await getSanityClient(config).fetch<number>(query);
	return count;
}

/**
 * Fetches all books for a given category as an array of Book objects (no drafts)
 * @param config Sanity config
 * @param category The category slug
 */
export async function getAllBooksForCategory(config: SanityConfigServer, category: string): Promise<Array<Book>> {
	const query = groq`*[_type == "${schemaTypes.BOOK}" && category->slug.current == $category]{
		${bookFields}
	}`;
	const books = await getSanityClient(config).fetch<Array<Book>>(query, { category });
	return books;
}

/**
 * Fetches a single book by slug as a Book object (including drafts for preview)
 * @param config Sanity config
 * @param slug The slug for the book
 * @returns
 */
export async function getBookBySlug(config: SanityConfigServer, preview: boolean, slug: string): Promise<Book> {
	const query = groq`*[_type == "${schemaTypes.BOOK}" && slug.current == $slug][0]{
		${bookFields}
	}`;
	const book = await getSanityClient(config, preview).fetch<Book>(query, { slug });
	return book;
}

/**
 * Fetches all categories as an array of Category objects
 * @param config Sanity config
 * @usedOnly If true (default), only returns categories that have at least one book
 * @returns
 */
export async function getCategories(config: SanityConfigServer, usedOnly = true): Promise<Array<Category>> {
	if (usedOnly) {
		// Returns all categories that have at least one book (default)
		const query = groq`*[_type == "${schemaTypes.BOOK}"]{
			${bookFields}
		}`;
		const books = await getSanityClient(config).fetch<Array<Book>>(query);
		const categories: Array<Category> = [];
		for (const book of books) {
			if (!categories.find((category) => category._id === book.category._id)) {
				categories.push(book.category);
			}
		}
		return categories;
	} else {
		// Returns all categories
		const query = groq`*[_type == "${schemaTypes.BOOK_CATEGORY}"]{
			...,
			"slug": slug.current
		}`;
		const categories = await getSanityClient(config).fetch<Array<Category>>(query);
		return categories;
	}
}

/**
 * Returns all books for sitemap
 * @param config
 * @returns
 */
export async function getAllBooksForSitemap(
	config: SanityConfigServer
): Promise<Array<{ slug: string; lastModified: string }>> {
	const query = groq`*[_type == "${schemaTypes.BOOK}"] {
		"slug": slug.current,
		"lastModified": coalesce(_updatedAt, _createdAt)
	}`;
	const data = await getSanityClient(config).fetch<Array<{ slug: string; lastModified: string }>>(query);
	return data.map((item) => {
		return {
			...item,
			slug: `books/${item.slug}`,
		};
	});
}
