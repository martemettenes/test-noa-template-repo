"use client";

import getYouTubeId from "get-youtube-id";
import { useState } from "react";

import IconPlay from "../icons/iconPlay";

interface Props {
	url: string; // The video url
}

/**
 * Youtube video facade
 * Fetches a thumbnail from the Youtube image api, and renders it as a placeholder until the user clicks on it.
 * It will then inject a responsive Youtube player into the page.
 * @param url The video url
 * @example
 * <FacadeYoutube url="https://youtu.be/5nKk_-Lvhzo" />
 */
export default function FacadeYoutube({ url }: Props) {
	const [renderVideo, setRenderVideo] = useState(false);

	// Extract the id
	const id = getYouTubeId(url);

	// Create the thumbnail url
	const thumbnailUrl = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;

	if (renderVideo) {
		return (
			<div className="aspect-video relative">
				<iframe
					className="absolute top-0 left-0 w-full h-full border-0"
					style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
					src={`https://www.youtube-nocookie.com/embed/${id}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		);
	} else if (thumbnailUrl) {
		return (
			<div className="relative aspect-video">
				<button
					onClick={() => setRenderVideo(true)}
					className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70"
				>
					<span className="text-white flex justify-center items-center shadow">
						<IconPlay className="w-28 h-28" />
					</span>
				</button>
				<img src={thumbnailUrl} alt="Poster for the video" className="w-full" />
			</div>
		);
	} else {
		return (
			<div className="aspect-video flex justify-center items-center">
				<span className="loading loading-ring loading-lg"></span>
			</div>
		);
	}
}
