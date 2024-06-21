import LandingPageSerializer from "@/lib/components/landingPage";
import { LandingPageBase as HomePageType } from "common/src/types/sanity/landingPage";

interface Props {
	landingPageDocument: HomePageType;
}

/**
 * This component is responsible for rendering any landing page
 */
export default function LandingPageComponent({ landingPageDocument }: Props): JSX.Element {
	return (
		<div>
			<div className="mx-auto flex max-w-screen-2xl flex-col lg:grid lg:grid-cols-12 lg:gap-4 lg:px-4">
				<LandingPageSerializer landingPage={landingPageDocument} />
			</div>
		</div>
	);
}
