import LandingPageCallToActionBar from "./callToActionBar";
import ContentListAuthors from "./contentList/ContentListAuthors";
import ContentListBooks from "./contentList/ContentListBooks";
import ContentListCategories from "./contentList/ContentListCategories";
import LandingPageHero from "./hero";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { LandingPageBase as LandingPageBaseType } from "common/src/types/sanity/landingPage";

interface Props {
	landingPage: LandingPageBaseType;
}

/**
 * This is the serializer for the Landing Page components
 * It takes a landing page and returns a Fragment element containing an array of components
 */
export default function LandingPageSerializer({ landingPage }: Props): JSX.Element {
	const comps = landingPage.pageItems.map((comp) => {
		switch (comp._type) {
			case schemaTypes.LANDING_PAGE_ITEM_HERO:
				return <LandingPageHero data={comp} key={comp._key} />;
			case schemaTypes.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR:
				return <LandingPageCallToActionBar data={comp} key={comp._key} />;
			case schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_BOOKS:
				return <ContentListBooks data={comp} key={comp._key} />;
			case schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_AUTHORS:
				return <ContentListAuthors data={comp} key={comp._key} />;
			case schemaTypes.LANDING_PAGE_ITEM_CONTENT_LIST_CATEGORIES:
				return <ContentListCategories data={comp} key={comp._key} />;
			default:
				return <p key={Math.random()}>Default component</p>;
		}
	});

	return <>{comps}</>;
}
