import type { PortableTextBlock } from "@sanity/types";

export type PortableText = Array<PortableTextBlock> | PortableTextBlock;

/**
 * Serializes a portable text block to plain text
 * Works the same way as the groq function «pt::text»
 * @see https://www.sanity.io/docs/presenting-block-text#ac67a867dd69
 */
export function portableTextToPlainText(body: PortableText) {
	const toParse = Array.isArray(body) ? body : [body];

	return (
		toParse
			// loop through each block
			.map((block) => {
				// if it's not a text block with children,
				// return nothing
				if (block._type !== "block" || !block.children) {
					return "";
				}
				// loop through the children spans, and join the
				// text strings
				const children = Array.isArray(block.children) ? block.children : [block.children];
				return children.map((child) => child.text).join("");
			})
			// join the paragraphs leaving split by two line breaks
			.join("\n\n")
	);
}
