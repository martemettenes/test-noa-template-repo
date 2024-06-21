import groq from "groq";

import { schemaTypes } from "../../../../sanity/SchemaType";
import { bookFields } from "../../books";

export const contentListBooksFields = groq`
_type == "${schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS}" => {
	...,
	items[]-> {
		...,
		${bookFields}
	}
}`;

export const contentListAuthorsFields = groq`
	_type == "${schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_AUTHORS}" => {
		...,
		items[]->
	}
`;

export const contentListCategoriesFields = groq`
	_type == "${schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_CATEGORIES}" => {
		...,
		items[]-> {
			...,
			"slug": slug.current,
		}
	}
`;
