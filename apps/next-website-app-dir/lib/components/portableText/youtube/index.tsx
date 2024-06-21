import getYouTubeId from "get-youtube-id";

interface Props {
	url: string;
}

/**
 * YouTube component used to display a YouTube video embedded as block content in Sanity
 */
export default function YouTubeComp({ url }: Props): JSX.Element {
	const videoId = getYouTubeId(url);
	return (
		<div className="aspect-video">
			<iframe
				src={`https://www.youtube.com/embed/${videoId}`}
				className="aspect-video w-full"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
