import { cn } from "common/src/utils/cn";

import { ButtonSize, ButtonVariant } from "./types";

interface ButtonClassProps {
	variant?: ButtonVariant;
	buttonSize?: ButtonSize;
	wide?: boolean;
	className?: string;
}

export const buttonClass = ({
	variant = "default",
	buttonSize = "md",
	wide,
	className,
}: ButtonClassProps) => {
	return cn(
		"btn",
		{
			"btn-default": variant === "default",
			"btn-neutral": variant === "neutral",
			"btn-primary": variant === "primary",
			"btn-secondary": variant === "secondary",
			"btn-accent": variant === "accent",
			"btn-ghost": variant === "ghost",
			"btn-xs": buttonSize === "xs",
			"btn-sm": buttonSize === "sm",
			"btn-md": buttonSize === "md",
			"btn-lg": buttonSize === "lg",
			"btn-wide": wide,
		},
		className
	);
};
