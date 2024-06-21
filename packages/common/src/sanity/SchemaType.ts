/**
 * All types for the entire project
 * These are types which need to be referred to in other documents and in the desk structure
 */
export const schemaTypes = {
	// Pages
	PAGE_HOME: "pageHome",
	PAGE_ARTICLE: "pageArticle",
	PAGE_LANDING_PAGE: "pageLandingPage",

	// Dynamic articles
	ARTICLE_COLLECTION_URL_PATH: "articleCollectionUrlPath",
	ARTICLE_CATEGORY: "articleCategory",

	// Landing page comps
	LANDING_PAGE_ITEM_HERO: "landingPageItemHero",
	LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR: "landingPageItemCallToActionBar",
	LANDING_PAGE_ITEM_ARTICLE_SECTION: "landingPageItemArticleSection",
	LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS: "landingPageItemContentListBooks",
	LANDING_PAGE_ITEM_CONTENT_LIST_AUTHORS: "landingPageItemContentListAuthors",
	LANDING_PAGE_ITEM_CONTENT_LIST_ARTICLES: "landingPageItemContentListArticles",
	LANDING_PAGE_ITEM_CONTENT_LIST_CATEGORIES: "landingPageItemContentListCategories",

	// Accessible image
	ACCESSIBLE_IMAGE: "accessibleImage", // non-localized
	ACCESSIBLE_IMAGE_INTL: "accessibleImageIntl", // For localized Sanity Studio (sanity-studio-intl)

	// Header/main menu
	MAIN_MENU: "mainMenu",
	MAIN_MENU_ITEM_OBJECT: "mainMenuItemObject",
	MAIN_MENU_ACTION_ITEM_OBJECT: "mainMenuActionItemObject",

	// Footer
	SITE_FOOTER: "siteFooter",

	// Objects
	LINK_OBJECT: "linkObject",

	// Book
	BOOK: "book",
	BOOK_AUTHOR: "bookAuthor",
	BOOK_CATEGORY: "bookCategory",
	BOOK_REVIEW: "bookReview",
} as const;

type SchemaTypeKeys = keyof typeof schemaTypes;
export type SchemaType = (typeof schemaTypes)[SchemaTypeKeys];
