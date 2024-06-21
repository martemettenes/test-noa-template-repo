import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageCrop, SanityImageObject } from "@sanity/image-url/lib/types/types";

import { SanityConfigClient } from "../../clients/config";
import type { AccessibleImage as AccessibleImageType } from "../../types/sanity/accessibleImage";

/**
 * Defines a list of widths to use when generating Sanity images
 * The point of having this list is to avoid too many permutations of image sizes
 * You can pass this list to clampDimensionsToNearestWidth
 * @see clampDimensionsToNearestWidth
 */
export const deviceWidths = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

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

/**
 * Parses a Sanity image reference into an object
 * @see https://github.com/sanity-io/image-url/blob/main/src/parseAssetId.ts
 */
export function parseAssetId(ref: string) {
	const example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
	const [, id, dimensionString, format] = ref.split("-");

	if (!id || !dimensionString || !format) {
		throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
	}

	const [imgWidthStr, imgHeightStr] = dimensionString.split("x");

	const width = +imgWidthStr;
	const height = +imgHeightStr;

	const isValidAssetId = isFinite(width) && isFinite(height);
	if (!isValidAssetId) {
		throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
	}

	return { id, width, height, format };
}

/**
 * Returns an object for a resolved Sanity image
 * This is a basic implementation that is intended for SEO purposes
 */
export function getSanityImage(image: SanityImageObject | null, config: SanityConfigClient) {
	if (!image) return null;
	const builder = imageUrlBuilder(config);
	const url = builder.image(image).width(400).url();
	const dimensions = getCroppedDimensions(url, 400, image.crop);
	return { url, width: 400, height: dimensions.height };
}

/**
 * Takes a width and height as dimensions and returns the same object clamped to the nearest width
 * This function also takes an array of widths to clamp to
 */
export function clampDimensionsToNearestWidth(dimensions: { width: number; height: number }, widths: Array<number>) {
	const width = getClosestNumber(widths, dimensions.width);
	const aspect = dimensions.width / dimensions.height;
	const height = Math.round(width / aspect);
	return { width, height };
}

// A function that takes an array of numbers and a number and returns the closest number in the array
function getClosestNumber(arr: Array<number>, num: number) {
	let curr = arr[0];
	let diff = Math.abs(num - curr);
	for (let val = 0; val < arr.length; val++) {
		const newDiff = Math.abs(num - arr[val]);
		if (newDiff < diff) {
			diff = newDiff;
			curr = arr[val];
		}
	}
	return curr;
}

// Generates the image url and dimensions
export function generateImageUrlAndDimensions(
	config: SanityConfigClient,
	image: AccessibleImageType,
	width: number,
	height: number,
	quality: number = 65
) {
	// Get the dpr for the client (browser)
	let dpr = 1;
	if (typeof window !== "undefined" && window.devicePixelRatio) {
		dpr = window.devicePixelRatio ?? dpr;
	}

	// Define the image builder
	const builder = imageUrlBuilder(config);

	// Setup the image loader and get the url for the image
	// Quality is set to 65% by default
	// Device pixel ratio is set to the dpr of the client
	const url = builder.image(image).width(width).height(height).dpr(dpr).auto("format").quality(quality).url();

	// Calculate the new dimensions of the image after scaling and cropping
	const dimensions = getCroppedDimensions(url, width, image.crop);
	return { url, dimensions };
}
