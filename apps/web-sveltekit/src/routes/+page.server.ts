import { getSanityConfig } from "$lib/config/sanityConfig";
import type { PageServerLoad } from "./$types";
import { getHomePageDocument } from "common/src/content/sanity/homePage";
import { error } from "@sveltejs/kit";
import { LandingPageBaseSchema } from "common/src/types/sanity/landingPage";

export const load: PageServerLoad = async ({ locals }) => {
	const preview = locals.preview;

	try {
		// Fetch the data
		const homePageData = await getHomePageDocument(getSanityConfig(), preview);

		// Validate the data
		// This will throw an error if the data is invalid
		LandingPageBaseSchema.parse(homePageData);

		// return it
		return { homePageData };
	} catch (e) {
		error(404, {
			message: "Page not found",
		});
	}
};
