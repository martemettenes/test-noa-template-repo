import pageArticle from "./documents/article";
import pageArticleCategory from "./documents/article/category";
import pageArticleUrlPath from "./documents/article/urlPath";
import book from "./documents/book";
import bookAuthor from "./documents/book/author";
import bookCategory from "./documents/book/category";
import bookReview from "./documents/book/review";
import footer from "./documents/footer";
import mainMenu from "./documents/header";
import pageHomePage from "./documents/homePage";
import pageLandingPage from "./documents/landingPage";
import compAccessibleImage from "./objects/accessibleImage";
import blockContainer from "./objects/blockContent/blockContainer";
import blockContentCallToActionContainer from "./objects/blockContent/callToAction";
import blockContentCallToActionBlock from "./objects/blockContent/callToAction/callToActionBlock";
import blockContentCallToActionButton from "./objects/blockContent/callToAction/callToActionButton";
import youtube from "./objects/blockContent/youtube";
import mainMenuActionItem from "./objects/header/mainMenuActionItem";
import mainMenuItem from "./objects/header/mainMenuItem";
import landingPageCompArticleSection from "./objects/landingPage/articleSection";
import landingPageCompCallToAction from "./objects/landingPage/callToActionBar";
import contentListAuthors from "./objects/landingPage/contentList/contentListAuthors";
import contentListBooks from "./objects/landingPage/contentList/contentListBooks";
import contentListCategories from "./objects/landingPage/contentList/contentListCategories";
import landingPageCompHero from "./objects/landingPage/hero";
import linkObject from "./objects/linkObject";

export const schemaTypes = [
	// Content
	book,
	bookAuthor,
	bookCategory,
	bookReview,
	// Page builder
	pageArticle,
	pageArticleCategory,
	pageArticleUrlPath,
	footer,
	mainMenu,
	pageHomePage,
	pageLandingPage,
	compAccessibleImage,
	blockContainer,
	blockContentCallToActionContainer,
	blockContentCallToActionBlock,
	blockContentCallToActionButton,
	youtube,
	mainMenuActionItem,
	mainMenuItem,
	landingPageCompArticleSection,
	landingPageCompCallToAction,
	landingPageCompHero,
	linkObject,
	contentListBooks,
	contentListAuthors,
	contentListCategories,
];
