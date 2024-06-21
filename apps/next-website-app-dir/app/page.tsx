import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getHomePageDocument } from "common/src/content/sanity/homePage/";
import { LandingPageBaseSchema } from "common/src/types/sanity/landingPage";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

// Caching
// Revalidate this page every hour
export const revalidate = 3600;

// SEO
// This is a "magic" Next function, see https://beta.nextjs.org/docs/guides/seo
export async function generateMetadata() {
	const preview = draftMode().isEnabled ? true : false;
	const page = await getData(preview);
	if (page) {
		return { title: page.title, description: page.description };
	}
	return null;
}

async function getData(preview: boolean) {
	// Get the page document...
	// Since the client is using perspectives, we will get only the data we need
	const page = await getHomePageDocument(sanityConfigServer, preview);

	// Validate the data using the Zod schema
	const result = LandingPageBaseSchema.safeParse(page);
	if (!result.success) {
		// Tip: This would be a good place to write an event to your logging service
		return null;
	}

	// ..and return it
	return page;
}

export default async function HomePage() {
	const preview = draftMode().isEnabled ? true : false;
	const page = await getData(preview);

	if (!page) {
		return notFound();
	}

	return <LandingPageComponent landingPageDocument={page} />;
}
