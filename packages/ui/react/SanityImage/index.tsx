"use client";

import imageUrlBuilder from "@sanity/image-url";
import { SanityConfigClient } from "common/src/clients/config";
import { AccessibleImage as AccessibleImageType } from "common/src/types/sanity/accessibleImage";
import {
	clampDimensionsToNearestWidth,
	deviceWidths,
	generateImageUrlAndDimensions,
} from "common/src/utils/sanity/images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Props for the AccessibleImage component
 */
interface Props {
	config: SanityConfigClient;
	image: AccessibleImageType;
	alt: string;
	width?: number; // (Recommended) The width of the image container
	height?: number; // (Recommended) The height of the image container
	className?: string;
	priority?: boolean; // Set to true if the image should NOT be lazy loaded
	quality?: number; // The quality of the image
}

/**
 * Use this component to display an image from Sanity as a Next image
 */
export default function AccessibleImage({
	config,
	image,
	alt,
	className,
	width,
	height,
	priority,
	quality,
}: Props): JSX.Element {
	// Creates a ref for the image container
	// This is used to get the dimensions of the container
	const ref = useRef<any>();

	// Define the image builder
	const builder = imageUrlBuilder(config);

	let initialImgUrl = "";
	let initialDimensions = { width: 1, height: 1 };

	if (width && height) {
		// If both width and height are passed, use them to generate the image url and dimensions
		// In this case we don't need to get the dimensions of the container
		const imgObj = generateImageUrlAndDimensions(config, image, width, height, quality);
		initialImgUrl = imgObj.url;
		initialDimensions = imgObj.dimensions;
	} else {
		// Set the initial dimensions to 800x800
		// This is just for loading the real image
		initialDimensions = { width: 800, height: 800 };

		// Generate a temp url for the image
		// to use while we figure out the correct dimensions
		initialImgUrl = builder
			.image(image)
			.width(initialDimensions.width)
			.quality(50)
			.blur(100)
			.auto("format")
			.url();
	}

	// (state) The image url state
	// The default image is blurred to hell while we figure out the correct dimensions
	const [imgUrl, setImgUrl] = useState<string>(initialImgUrl);

	// (state) The dimensions of the image after scaling and cropping
	// Used for the width and height attributes of the image
	const [dimensions, setDimensions] = useState<{ width: number; height: number }>(initialDimensions);

	/**
	 * PS: This is only used for images with no width and height props
	 * When the image has loaded, we can get the dimensions of the image container
	 * We need to do this because the image might have a crop or hotspot applied to it
	 * In this case we need to know the dimensions of the container so we can scale and crop the image correctly
	 */
	function loadHandler() {
		// The ref might be undefined since images can be lazy loaded
		// In that case this function will be called again when the image is loaded
		if (!ref.current) return;

		// Get the dimensions of the image container
		// Used the passed props if they exist, otherwise use the dimensions of the container
		const rect = {
			height: height || ref.current.clientHeight,
			width: width || ref.current.clientWidth,
		};

		// Clamp the dimensions to the nearest device width
		// This is done to generate fewer versions of images on CDN, thereby
		// making it more likely to hit a cached version
		const clampedRect = clampDimensionsToNearestWidth(rect, deviceWidths);

		// Generate the url and dimensions of the image
		const imageObj = generateImageUrlAndDimensions(config, image, clampedRect.width, clampedRect.height);

		// Set the new dimensions of the image after scaling and cropping
		setDimensions(imageObj.dimensions);

		// Generate the new url for the image and update the state
		setImgUrl(imageObj.url);
	}

	// Triggers when the image element has been added to the DOM
	useEffect(() => {
		// Skip this if the image has a width and height prop
		// In that case we don't need to get the dimensions of the container
		if (width && height) return;

		// Grab the ref as an image element
		const img = ref.current as HTMLImageElement;

		if (img.complete) {
			// If the image has already loaded, call the load handler
			loadHandler();
		} else {
			// If the image has not loaded yet, add a load event listener
			img.onload = () => {
				loadHandler();
			};
		}
	}, [ref.current]);

	return (
		<Image
			ref={ref}
			src={imgUrl}
			alt={alt || image.alt || ""}
			className={className}
			width={dimensions.width}
			height={dimensions.height}
			unoptimized={true}
			priority={!!priority}
		/>
	);
}
