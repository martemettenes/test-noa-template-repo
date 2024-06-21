import { cn } from "common/src/utils/cn";
import Link, { LinkProps } from "next/link";
import React from "react";

import { BaseButtonProps, buttonClass } from "../Button";

interface LinkButtonProps extends BaseButtonProps, LinkProps {
	href: string; // The url
	underline?: boolean; // Present the text as an underlined link
}

const LinkButton = ({
	children,
	className,
	variant,
	buttonSize,
	wide,
	underline,
	...LinkButtonProps
}: LinkButtonProps) => {
	const classes = cn(buttonClass({ variant, buttonSize, wide, className }), { "no-underline": !underline });
	return (
		<Link className={classes} {...LinkButtonProps}>
			{children}
		</Link>
	);
};
export default LinkButton;
