import { sanityConfigClient } from "@/lib/config/envVariables";
import { PageItemHero } from "common/src/types/sanity/landingPage/pageItemHero";
import { cn } from "common/src/utils/cn";
import { Link, LinkButton } from "ui/react";
import { SanityImage } from "ui/react";

interface Props {
	data: PageItemHero;
}

export default function LandingPageHero({ data }: Props) {
	const { title, bodyText, callToActionLabel, callToActionUrl, heroImage, layout, purpose, callToActionType } = data;

	//set header level based on purpose
	const heroTitle = purpose === "header" ? <h1>{title}</h1> : <h2>{title}</h2>;

	return (
		<section
			className={cn(
				"col-span-full flex items-center justify-between gap-8 px-4 py-8 max-lg:flex-col-reverse lg:p-16",
				{
					"flex-row-reverse": layout === "imageLeft",
				}
			)}
		>
			<div className="prose max-lg:text-center">
				{heroTitle}
				<p className={cn(purpose === "header" ? "text-lg" : "text-base")}>{bodyText}</p>
				{callToActionType === "button" ? (
					<LinkButton
						buttonSize={purpose === "header" ? "lg" : "md"}
						variant={purpose === "header" ? "primary" : "secondary"}
						href={callToActionUrl}
					>
						{callToActionLabel}
					</LinkButton>
				) : (
					<Link href={callToActionUrl}>{callToActionLabel}</Link>
				)}
			</div>
			<SanityImage
				className="aspect-[4/3] max-w-xl rounded-box object-cover shadow-2xl max-lg:w-full"
				config={sanityConfigClient}
				image={heroImage}
				alt={heroImage.alt ?? ""}
			/>
		</section>
	);
}
