"use client";

import { getVimeoIdFromUrl } from "common/src/utils/vimeo";
import { useEffect, useState } from "react";

import FacadeVimeoPlaceholder from "./placeholder";
import FacadeVimeoPlayerEmbed from "./playerEmbed";

interface Props {
	url: string; // The video url
}

/**
 * Vimeo video facade
 * Fetches data from the Vimeo API and renders a placeholder until the user clicks on it.
 * It will then inject the Vimeo player into the page.
 * @param url The video url
 * @example
 * <FacadeVimeo url="https://vimeo.com/123456789" />
 */
export default function FacadeVimeo({ url }: Props) {
	const [renderVideo, setRenderVideo] = useState(false);
	const [videoData, setVideoData] = useState<{ title: string; thumbnailUrl: string }>();
	const [error, setError] = useState<string>();

	// Extract the id
	const id = getVimeoIdFromUrl(url);

	async function fetchVideoData(id: string): Promise<{ title: string; thumbnailUrl: string }> {
		const videoDataUrl = `https://vimeo.com/api/v2/video/${id}.json`;
		const response = await fetch(videoDataUrl);
		if (response.ok) {
			try {
				const data = await response.json();
				return {
					title: data[0].title,
					thumbnailUrl: data[0].thumbnail_large,
				};
			} catch (error) {
				throw new Error(`Could not parse video data from ${videoDataUrl}`);
			}
		} else {
			throw new Error(`Could not fetch video data from ${videoDataUrl}`);
		}
	}

	useEffect(() => {
		// Since this is a client component, we use a useEffect hook to fetch the video data
		if (id && id.length > 0) {
			fetchVideoData(id)
				.then((data) => {
					setVideoData(data);
				})
				.catch((error) => {
					setError(error.message ?? "Error loading video data");
				});
		} else {
			setError("Invalid Vimeo url");
		}
	}, [url]);

	if (error) {
		// Error state, render the error message
		return (
			<div className="aspect-video flex justify-center items-center border border-red-500">
				<p>{error}</p>
			</div>
		);
	}

	if (renderVideo) {
		// The user has clicked on the placeholder, render the video
		return <FacadeVimeoPlayerEmbed id={id} title={videoData?.title ?? "Vimeo video"} />;
	} else if (videoData) {
		// The video data has been fetched, render the placeholder
		return (
			<FacadeVimeoPlaceholder
				thumbnailUrl={videoData.thumbnailUrl}
				title={videoData?.title ?? "Vimeo video"}
				onClick={() => setRenderVideo(true)}
			/>
		);
	} else {
		// The video data is being fetched, render a loading indicator
		return (
			<div className="aspect-video flex justify-center items-center">
				<span className="loading loading-ring loading-lg"></span>
			</div>
		);
	}
}
