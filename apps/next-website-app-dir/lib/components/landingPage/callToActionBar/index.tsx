import { PageItemCallToActionBar } from "common/src/types/sanity/landingPage/pageItemCallToActionBar";
import { cn } from "common/src/utils/cn";
import { LinkButton } from "ui/react";

interface Props {
	data: PageItemCallToActionBar;
}

export default function LandingPageCallToActionBar({ data }: Props) {
	const { bodyText, callToActionLabel, callToActionUrl, background } = data;

	return (
		<section className="col-span-full px-4 py-10">
			<div
				className={cn("flex flex-col items-center justify-center rounded-box p-8 text-center", {
					"bg-primary bg-opacity-20": background === "solid",
					"glass bg-primary bg-opacity-20": background === "glass",
				})}
			>
				<div className="prose">
					<p className="text-xl font-medium">{bodyText}</p>
					<LinkButton className="btn btn-primary mt-4 no-underline" href={callToActionUrl} passHref>
						{callToActionLabel}
					</LinkButton>
				</div>
			</div>
		</section>
	);
}
