<script lang="ts">
	import { getVimeoIdFromUrl } from "common/src/utils/vimeo";
	import { onMount } from "svelte";
	import IconPlay from "../icons/play.svelte";

	// Props
	export let url: string;

	// Vars
	const id = getVimeoIdFromUrl(url);
	let renderVideo = false;
	let videoDataPromise: Promise<{ title: string; thumbnailUrl: string }>;

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

	// Fetch data for the video on mount
	onMount(async () => {
		videoDataPromise = fetchVideoData(id);
	});
</script>

{#if renderVideo}
	<div class="aspect-video relative">
		<iframe
			src="https://player.vimeo.com/video/{id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
			frameborder="0"
			allow="autoplay; fullscreen; picture-in-picture"
			style="position:absolute;top:0;left:0;width:100%;height:100%;"
			title="Vimeo video"
		/>
	</div>
	<script src="https://player.vimeo.com/api/player.js"></script>
{:else if videoDataPromise}
	{#await videoDataPromise}
		<div class="aspect-video flex justify-center items-center">
			<div class="aspect-video flex justify-center items-center">
				<span class="loading loading-ring loading-lg"></span>
			</div>
		</div>
	{:then { title, thumbnailUrl }}
		<div class="relative aspect-video">
			<button
				on:click={() => (renderVideo = true)}
				class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70"
				><span class="text-white flex justify-center items-center shadow"
					><IconPlay className="w-28 h-28" /></span
				>
			</button>
			<img src={thumbnailUrl} alt={title ?? "Poster for the video"} class="w-full" />
		</div>
	{:catch}
		<div class="aspect-video flex justify-center items-center border border-red-500">
			<p>Error loading video data</p>
		</div>
	{/await}
{:else}
	<div class="aspect-video flex justify-center items-center">
		<div class="aspect-video flex justify-center items-center">
			<span class="loading loading-ring loading-lg"></span>
		</div>
	</div>
{/if}
