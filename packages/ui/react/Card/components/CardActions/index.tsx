import { cn } from "common/src/utils/cn";
import React from "react";

export interface CardActionProps {
	children?: React.ReactNode;
	className?: string;
}

const CardActions = ({ children, className }: CardActionProps) => {
	const componentClass = cn("card-actions justify-end", className);

	return <div className={componentClass}>{children}</div>;
};

CardActions.displayName = "";

export default CardActions;
