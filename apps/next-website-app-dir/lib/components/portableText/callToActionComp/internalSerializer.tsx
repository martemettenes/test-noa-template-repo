import { PortableTextComponents } from "@portabletext/react";

/**
 * Custom serializer for the Call to action component
 */
export const callToActionSerializer: PortableTextComponents = {
	block: ({ children }) => {
		// This removes the <p> wrapper for the text body
		return <>{children}</>;
	},
	marks: {
		link: ({ value, children }) => {
			return (
				<a className="underline" href={value?.href}>
					{children}
				</a>
			);
		},
	},
};
