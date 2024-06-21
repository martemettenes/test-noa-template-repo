import { cn } from "common/src/utils/cn";
import React from "react";

export interface CardBannerProps {
	children?: React.ReactNode;
	className?: string;
}

const CardBanner = ({ children, className }: CardBannerProps) => {
	const componentClass = cn(className);

	return <figure className={componentClass}>{children}</figure>;
};

CardBanner.displayName = "";

export default CardBanner;
