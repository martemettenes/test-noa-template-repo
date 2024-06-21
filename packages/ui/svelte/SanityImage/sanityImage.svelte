<script lang="ts">
	/**
	 * Sanity image component
	 * This component is used to render images from Sanity
	 * It handles scaling, hot spots and cropping of images
	 * It also generates the correct image width and height based
	 * on the device width if no width and height props are passed
	 */
	import imageUrlBuilder from "@sanity/image-url";
	import type { SanityConfigClient } from "common/src/clients/config";
	import type { AccessibleImage as AccessibleImageType } from "common/src/types/sanity/accessibleImage";
	import {
		clampDimensionsToNearestWidth,
		deviceWidths,
		generateImageUrlAndDimensions,
	} from "common/src/utils/sanity/images";
	import { getImageData, setImageData } from "./sanityImageStore";

	import { onMount } from "svelte";

	// Props
	export let config: SanityConfigClient; // (Required) The Sanity config object
	export let image: AccessibleImageType; // (Required) The image object from Sanity
	export let alt: string; // (Required) The alt text for the image
	export let width: number | undefined = undefined; // (Recommended) The width of the image container
	export let height: number | undefined = undefined; // (Recommended) The height of the image container
	export let className: string | undefined = undefined; // (Optional) The class string of the image element
	export let quality: number = 65; // (Optional) The quality of the image
	export let loading: "eager" | "lazy" = "lazy"; // (Optional) The loading attribute of the image element

	// Define the image builder
	const builder = imageUrlBuilder(config);

	// Reference to the image DOM element (bind:this)
	// See the element itself at the bottom of the file
	let imgRef: HTMLImageElement;

	// Set the context
	setImageData();

	// Grab the store
	const imageStore = getImageData();

	// Initial values for the image url and dimensions
	$: getInitialDimensionsAndUrl(config, image, width, height);

	/**
	 * Sets the initial dimensions and url of the image
	 * This image will be a blurred version of the real image
	 * It's used to get the dimensions of the image container
	 */
	function getInitialDimensionsAndUrl(
		config: SanityConfigClient,
		image: AccessibleImageType,
		width?: number,
		height?: number
	) {
		let initialDimensions = { width: 1, height: 1 };
		let initialImgUrl = "";

		if (width && height) {
			// If both width and height are passed, use them to generate the image url and dimensions
			// In this case we don't need to get the dimensions of the container
			const imgObj = generateImageUrlAndDimensions(config, image, width, height);
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
				.quality(30)
				.blur(100)
				.auto("format")
				.url();
		}

		$imageStore = {
			url: initialImgUrl,
			dimensions: initialDimensions,
			mainImageLoaded: false,
		};
	}

	/**
	 * PS: This is only used for images with no width and height props
	 * When the image has loaded, we can get the dimensions of the image container
	 * We need to do this because the image might have a crop or hotspot applied to it
	 * In this case we need to know the dimensions of the container so we can scale and crop the image correctly
	 */
	function loadHandler() {
		// Skip this if the image has a width and height prop
		// In that case we don't need to get the dimensions of the container
		if (width && height) return;

		// The ref might be undefined since images can be lazy loaded
		// In that case this function will be called again when the image is loaded
		// also... If the main image has loaded, just return
		if (!imgRef || $imageStore.mainImageLoaded) return;

		// Get the dimensions of the image container
		// Used the passed props if they exist, otherwise use the dimensions of the container
		const rect = {
			height: height || imgRef.clientHeight,
			width: width || imgRef.clientWidth,
		};

		// Clamp the dimensions to the nearest device width
		// This is done to generate fewer versions of images on CDN, thereby
		// making it more likely to hit a cached version
		const clampedRect = clampDimensionsToNearestWidth(rect, deviceWidths);

		// Generate the url and dimensions of the image
		const imageObj = generateImageUrlAndDimensions(
			config,
			image,
			clampedRect.width,
			clampedRect.height,
			quality
		);

		// Set the new dimensions of the image after scaling and cropping
		$imageStore = { url: imageObj.url, dimensions: imageObj.dimensions, mainImageLoaded: true };

		return { url: imageObj.url, dimensions: imageObj.dimensions };
	}

	// Triggers when the image element has been added to the DOM
	onMount(() => {
		if (!imgRef) return;
		if (imgRef.complete) {
			loadHandler();
		}
	});
</script>

<!-- The image element -->
<img
	bind:this={imgRef}
	on:load={loadHandler}
	src={$imageStore.url}
	{alt}
	class={className}
	width={$imageStore.dimensions.width}
	height={$imageStore.dimensions.height}
	loading={loading || "lazy"}
/>
