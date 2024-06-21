import { getSanityConfig } from "$lib/config/sanityConfig";
import type { LayoutServerLoad } from "./$types";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages/";

export const load: LayoutServerLoad = async ({ locals }) => {
	const data = await getMainMenuAndFooterData(getSanityConfig());
	return { headerAndFooterData: data, preview: locals.preview };
};
