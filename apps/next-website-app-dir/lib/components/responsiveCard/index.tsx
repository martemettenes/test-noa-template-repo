import { sanityConfigClient } from "@/lib/config/envVariables";
import type { AccessibleImage } from "common/src/types/sanity/accessibleImage";
import { cn } from "common/src/utils/cn";
import React from "react";
import { SanityImage } from "ui/react";

export interface Props {
	image?: AccessibleImage;
	body: React.ReactNode;
	actions?: React.ReactNode;
}

const ResponsiveCard: React.FC<Props> = ({ image, body, actions }) => {
	const bannerImage = image && (
		<SanityImage
			config={sanityConfigClient}
			image={image}
			alt={image.alt ?? ""}
			className={cn(
				"m-0 aspect-square rounded-t-xl object-cover",
				//container queries
				"@xl:aspect-[9/16] @xl:w-56 @xl:rounded-bl-xl @xl:rounded-tr-none",
				"@3xl:aspect-square @3xl:w-1/2",
				"@5xl:absolute @5xl:left-0 @5xl:top-0 @5xl:h-full @5xl:w-full @5xl:rounded-xl @5xl:rounded-tr-xl"
			)}
		/>
	);

	return (
		<div className="m-0 h-full @container">
			<div
				className={cn(
					"card bordered relative m-0 h-full rounded-xl bg-base-200 no-underline",
					//container queries
					"@xl:card-side"
				)}
			>
				{bannerImage}
				<div
					className={cn(
						"card-body relative w-full justify-between gap-4",
						//container queries
						"@5xl:z-10 @5xl:items-center @5xl:bg-base-200 @5xl:bg-opacity-30 @5xl:py-40"
					)}
				>
					<div className="@5xl:text-center">{body}</div>
					<div className="card-actions @5xl:mt-10">{actions}</div>
				</div>
			</div>
		</div>
	);
};
export default ResponsiveCard;
