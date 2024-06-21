import { cn } from "common/src/utils/cn";
import React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
	direction?: "horizontal" | "vertical";
}

const Join = ({ children, className, direction = "horizontal" }: Props) => {
	const componentClass = cn(
		"join",
		{
			"join-horizontal": direction === "horizontal",
			"join-vertical": direction === "vertical",
		},
		className
	);

	return <div className={componentClass}>{children}</div>;
};
export default Join;
