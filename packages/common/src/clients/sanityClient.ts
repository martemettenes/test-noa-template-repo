import PicoSanity from "picosanity";

import { SanityConfigClient, SanityConfigServer } from "./config";

/**
 * Returns the correct Sanity client based on the preview param
 * When preview is true/active, no CDN is used since we want drafts and the perspective is set to previewDrafts
 */
export function getSanityClient(config: SanityConfigClient | SanityConfigServer, preview = false) {
	// If no (boolean) value is set for useCdn, default to true
	const useCdnDefault = typeof config.useCdn !== "boolean" ? true : config.useCdn;
	// Set a default api version
	const apiVersion = config.apiVersion || "v2021-10-21";
	return preview
		? new PicoSanity({ ...config, apiVersion, useCdn: false, perspective: "previewDrafts" })
		: new PicoSanity({ ...config, apiVersion, useCdn: useCdnDefault, perspective: "published" });
}
