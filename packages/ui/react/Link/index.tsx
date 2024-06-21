import { cn } from "common/src/utils/cn";
import NextLink, { LinkProps } from "next/link";
import React from "react";

interface Props extends LinkProps {
	children: React.ReactNode;
	className?: string;
	href: string;
	variant?:
		| "primary"
		| "secondary"
		| "neutral"
		| "accent"
		| "success"
		| "info"
		| "warning"
		| "error"
		| "hover";
}

const Link = ({ children, variant, className, ...Props }: Props) => {
	const componentClass = cn("link", className, {
		"link-primary": variant === "primary",
		"link-secondary": variant === "secondary",
		"link-neutral": variant === "neutral",
		"link-accent": variant === "accent",
		"link-success": variant === "success",
		"link-info": variant === "info",
		"link-warning": variant === "warning",
		"link-error": variant === "error",
		"link-hover": variant === "hover",
	});

	return (
		<NextLink className={componentClass} {...Props}>
			{children}
		</NextLink>
	);
};
export default Link;
