import { cn } from "common/src/utils/cn";
import React from "react";

/**
 * Props shared between "button-like" components like Button and LinkButton
 */
export interface BaseButtonProps {
	/** Specify component children */
	children?: React.ReactNode;
	/** Add an optional class */
	className?: string;
	/** Specify the button variant */
	variant?: "default" | "neutral" | "primary" | "secondary" | "accent" | "ghost";
	/** Specify the button size */
	buttonSize?: "xs" | "sm" | "md" | "lg";
	/** Specify the button width */
	wide?: boolean;
	/** Set to true to display a loader (spinner) inside the button */
	loading?: boolean;
}

interface ButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
	ariaLabel: string;
}

/** Base styling for "button-like" components like Button and LinkButton */
export const buttonClass = ({ variant = "default", buttonSize = "md", wide, className }: BaseButtonProps) => {
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

const Button = ({
	children,
	ariaLabel,
	className,
	variant,
	buttonSize,
	wide,
	loading,
	...ButtonProps
}: ButtonProps) => {
	return (
		<button
			aria-label={ariaLabel}
			className={buttonClass({ variant, buttonSize, wide, loading, className })}
			{...ButtonProps}
		>
			{loading && <span className="loading loading-spinner"></span>}
			{children}
		</button>
	);
};
export default Button;
