import IconPlay from "../icons/iconPlay";

interface Props {
	thumbnailUrl: string;
	title: string;
	onClick: () => void;
}

/**
 * Renders the image placeholder for a Vimeo video
 */
export default function FacadeVimeoPlaceholder({ thumbnailUrl, title, onClick }: Props) {
	return (
		<div className="relative aspect-video">
			<button
				onClick={onClick}
				className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70"
			>
				<span className="text-white flex justify-center items-center shadow">
					<IconPlay className="w-28 h-28" />
				</span>
			</button>
			<img src={thumbnailUrl} alt={title} className="w-full" />
		</div>
	);
}
