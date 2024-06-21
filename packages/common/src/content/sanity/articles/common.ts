import { contentListBooksFields } from "../homePage/contentList";

export const articleFields = `
...,
"slug": slug.current,
category->,
collection->,
blocks {
	body[] {
		...,
		${contentListBooksFields}
	}
}
`;
