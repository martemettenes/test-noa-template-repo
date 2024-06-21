import "../styles/globals.css";
import FooterComp from "@/lib/components/footer";
import MainMenuComp from "@/lib/components/mainMenu";
import { sanityConfigServer } from "@/lib/config/envVariables";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { draftMode } from "next/headers";

export const revalidate = 3600; // every hour

async function fetchData() {
	const mainMenuAndFooterData = await getMainMenuAndFooterData(sanityConfigServer);
	return mainMenuAndFooterData;
}

// default SEO
export const metadata = {
	title: {
		default: "Home",
		template: "%s | (TR) Next App dir",
	},
	openGraph: {
		title: "(TR) Next App dir",
		locale: "en-US",
		type: "website",
	},
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const preview = draftMode().isEnabled ? true : false;
	const mainMenuAndFooterData = await fetchData();

	return (
		<html lang="en" data-theme="bumblebee">
			<body>
				<div className="flex min-h-screen flex-col">
					<MainMenuComp mainMenuData={mainMenuAndFooterData.mainMenu} previewActive={preview} />
					<main className="flex flex-1 flex-col">{children}</main>
					<FooterComp footerData={mainMenuAndFooterData.footer} />
				</div>
			</body>
		</html>
	);
}
