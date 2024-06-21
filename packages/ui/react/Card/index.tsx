import { cn } from "common/src/utils/cn";
import React from "react";

import CardActions from "./components/CardActions";
import CardBanner from "./components/CardBanner";
import CardBody from "./components/CardBody";

interface CardProps {
	children?: React.ReactNode;
	/** Specify if the card should have a border */
	border?: boolean;
	className?: string;
	/** Specify if the banner should act as card background */
	bannerFull?: boolean;
	shadow?: boolean;
	compact?: boolean;
}

const Card = ({ children, border, className, bannerFull, shadow, compact }: CardProps) => {
	const componentClass = cn(
		"card",
		{
			"card-bordered": border,
			"image-full": bannerFull,
			"shadow-xl": shadow,
			"card-compact": compact,
		},
		className
	);

	return <div className={componentClass}>{children}</div>;
};

Card.displayName = "Card";
CardBanner.displayName = "Card.Banner";
CardBody.displayName = "Card.Body";
CardActions.displayName = "Card.Actions";

export default Object.assign(Card, {
	Banner: CardBanner,
	Body: CardBody,
	Actions: CardActions,
});
