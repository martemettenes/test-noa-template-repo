import CallToAction from "./callToAction/callToAction.svelte";
import ContentListBooks from "./contentListBooks.svelte";
import Image from "./image.svelte";
import Youtube from "./youtube.svelte";
import type { PortableTextComponents } from "@portabletext/svelte";

export const components: PortableTextComponents = {
	types: {
		callToAction: CallToAction,
		youtube: Youtube,
		accessibleImage: Image,
		landingPageItemContentListBooks: ContentListBooks,
	},
};
