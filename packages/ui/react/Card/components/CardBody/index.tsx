import { cn } from "common/src/utils/cn";
import React from "react";

export interface CardBodyProps {
	children?: React.ReactNode;
	className?: string;
}

const CardBody = ({ children, className }: CardBodyProps) => {
	const componentClass = cn("card-body", className);

	return <div className={componentClass}>{children}</div>;
};

CardBody.displayName = "";

export default CardBody;
