/**
 * Injects the Vimeo player into the page.
 */
export default function FacadeVimeoPlayerEmbed({ id, title }: { id: string; title: string }) {
	return (
		<>
			<div className="aspect-video relative">
				<iframe
					src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
					title={title ?? "Vimeo video"}
				/>
			</div>
			<script src="https://player.vimeo.com/api/player.js"></script>
		</>
	);
}
