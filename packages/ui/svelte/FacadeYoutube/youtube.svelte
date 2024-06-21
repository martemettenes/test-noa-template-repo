<script lang="ts">
	import getYouTubeId from "get-youtube-id";
	import IconPlay from "../icons/play.svelte";

	// Props
	export let url: string;

	// Vars
	const id = getYouTubeId(url);
	let thumbnailUrl = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;
	let renderVideo = false;
</script>

{#if renderVideo}
	<div class="relative aspect-video">
		<iframe
			class="absolute top-0 left-0 w-full h-full border-0"
			width="560"
			height="315"
			src="https://www.youtube-nocookie.com/embed/{id}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
{:else if thumbnailUrl}
	<div class="relative aspect-video">
		<button
			on:click={() => (renderVideo = true)}
			class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70"
			><span class="flex items-center justify-center text-white shadow"
				><IconPlay className="w-28 h-28" /></span
			>
		</button>
		<img src={thumbnailUrl} alt="Poster for the video" class="object-cover w-full aspect-video" />
	</div>
{:else}
	<div class="flex items-center justify-center aspect-video">
		<div class="flex items-center justify-center aspect-video">
			<span class="loading loading-ring loading-lg"></span>
		</div>
	</div>
{/if}
