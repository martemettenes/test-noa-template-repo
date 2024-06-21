<script lang="ts">
	import { cn } from "common/src/utils/cn";

	export let border: boolean = false;
	export let className: string | undefined = undefined;
	export let bannerFull: boolean = false;
	export let shadow: boolean = false;
	export let compact: boolean = false;
</script>

<div
	class={cn(
		"card",
		{
			"card-bordered": border,
			"image-full": bannerFull,
			"shadow-xl": shadow,
			"card-compact": compact,
		},
		className
	)}
>
	<slot />
</div>
