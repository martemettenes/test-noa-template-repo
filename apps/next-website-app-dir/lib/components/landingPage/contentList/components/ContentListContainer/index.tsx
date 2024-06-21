import React from "react";

interface Props {
	children: React.ReactNode;
}

/** Outer container for content lists */
const ContentListContainer: React.FC<Props> = ({ children }) => {
	return <section className="prose col-span-full max-w-full px-4 py-10">{children}</section>;
};
export default ContentListContainer;
