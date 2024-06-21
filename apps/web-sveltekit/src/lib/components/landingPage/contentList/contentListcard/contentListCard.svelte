<script lang="ts">
	import { cn } from "common/src/utils/cn";

	export let className: string | undefined = undefined;
</script>

<div class={cn("m-0 h-full @container", className)}>
	<div
		class={cn(
			"card bordered relative m-0 h-full rounded-xl bg-base-200 no-underline",
			//container queries
			"@xl:card-side"
		)}
	>
		<slot />
	</div>
</div>
