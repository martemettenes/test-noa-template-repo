import { cn } from "common/src/utils/cn";
import React from "react";

interface BadgeProps {
	children: React.ReactNode;
	className?: string;
	variant?:
		| "neutral"
		| "primary"
		| "secondary"
		| "success"
		| "accent"
		| "ghost"
		| "warning"
		| "error"
		| "info"
		| "outline";
	size?: "xs" | "sm" | "md" | "lg";
}

const Badge = ({ children, className, variant = "neutral", size = "md" }: BadgeProps) => {
	const componentClass = cn(
		"badge",
		{
			"badge-neutral": variant === "neutral",
			"badge-primary": variant === "primary",
			"badge-secondary": variant === "secondary",
			"badge-success": variant === "success",
			"badge-accent": variant === "accent",
			"badge-ghost": variant === "ghost",
			"badge-warning": variant === "warning",
			"badge-error": variant === "error",
			"badge-info": variant === "info",
			"badge-outline": variant === "outline",
			"badge-xs": size === "xs",
			"badge-sm": size === "sm",
			"badge-md": size === "md",
			"badge-lg": size === "lg",
		},
		className
	);

	return <span className={componentClass}>{children}</span>;
};
export default Badge;
