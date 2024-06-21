import { getImageDimensions } from "@sanity/asset-utils";
import type { SanityImageCrop } from "@sanity/image-url/lib/types/types";

/**
 * Finds the dimensions of a Sanity image
 * to use in the width and heigh attributes
 * @see https://github.com/sanity-io/sanity/issues/1627
 */
export function getCroppedDimensions(imageUrl: string, targetWidth: number, crop?: SanityImageCrop) {
	const dimensions = getImageDimensions(imageUrl);

	let height = dimensions.height;
	let width = dimensions.width;

	if (crop) {
		const y = crop.top + crop.bottom;
		const x = crop.left + crop.right;
		height = (1 - y) * height;
		width = Math.round((1 - x) * width);
	}
	height = targetWidth ? Math.round((height * targetWidth) / width) : Math.round(height);
	return { height, width: targetWidth ?? width };
}
