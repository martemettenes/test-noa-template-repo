import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getLandingPageDocumentBySlug } from "common/src/content/sanity/landingPages";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 3600; // every hour

// SEO
export async function generateMetadata({ params }: { params: Params }) {
	const preview = draftMode().isEnabled ? true : false;
	const page = await getData(preview, params.slug);
	if (page) {
		return { title: page.title, description: page.description };
	}
	return null;
}

async function getData(preview: boolean, slug: string) {
	const page = await getLandingPageDocumentBySlug(sanityConfigServer, preview, slug);
	// ..and return it
	return page;
}

interface Params {
	slug: string;
}
export default async function LandingPage({ params }: { params: Params }) {
	const preview = draftMode().isEnabled ? true : false;
	const page = await getData(preview, params.slug);
	if (!page) {
		return notFound();
	}
	return <LandingPageComponent landingPageDocument={page} />;
}
