import React from "react";

interface Props {
	children: React.ReactNode;
}

/** Responsive grid component for content lists */
const ResponsiveList: React.FC<Props> = ({ children }) => {
	return (
		<ul className="flex grid-flow-row flex-col gap-4 pl-0 md:grid md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
			{children}
		</ul>
	);
};
export default ResponsiveList;
