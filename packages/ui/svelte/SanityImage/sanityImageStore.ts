import { getContext, setContext } from "svelte";
import { type Writable, writable } from "svelte/store";

interface Dimensions {
	width: number;
	height: number;
}

type ImageStore = { url: string; dimensions: Dimensions; mainImageLoaded: boolean };
type Context = Writable<ImageStore>;

export function setImageData() {
	let imageStore = writable<ImageStore>({
		url: "",
		dimensions: { width: 0, height: 0 },
		mainImageLoaded: false,
	});
	setContext("imageStore", imageStore);
}

export function getImageData() {
	return getContext<Context>("imageStore");
}
