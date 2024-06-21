"use client";

import { cn } from "common/src/utils/cn";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	title: string;
	indicator?: "arrow" | "plus";
	children: React.ReactNode;
	open?: boolean;
	className?: string;
}

const Accordion = ({ title, indicator, open = false, children, className, ...Props }: Props) => {
	const [openStatus, setOpenStatus] = React.useState(open);

	const handleOpen = () => {
		setOpenStatus(!openStatus);
	};

	const componentClass = cn(
		"collapse bg-base-200 text-left",
		openStatus ? "collapse-open" : "collapse-close",
		indicator === "plus" ? "collapse-plus" : "collapse-arrow",
		className
	);

	return (
		<button onClick={handleOpen} className={componentClass} {...Props}>
			<p className="text-xl font-medium collapse-title ">{title}</p>
			<div className="collapse-content">{children}</div>
		</button>
	);
};
export default Accordion;
