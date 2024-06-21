import { SlugRule } from "sanity";

// These slugs are not allowed since they are routes in the Next site
const blackListedSlugs = ["articles", "sitemap.xml", "robots.txt", "books", "api", "login"];

interface Fields {
	_type: "slug";
	current?: string;
}

/**
 * Custom validator for Landing page slugs
 * There are certain blacklisted items which cannot be used since
 * they will collide with pre-defined routes.
 */
export function landingPageSlugValidator(Rule: SlugRule) {
	return Rule.custom((fields: Fields | undefined) => {
		if (!fields || !fields.current) {
			return `The slug is required for a landing page`;
		}
		if (blackListedSlugs.includes(fields.current)) {
			return `Blacklisted: The following words cannot be used as a slug: ${blackListedSlugs.join(",")}`;
		}
		return true;
	});
}
