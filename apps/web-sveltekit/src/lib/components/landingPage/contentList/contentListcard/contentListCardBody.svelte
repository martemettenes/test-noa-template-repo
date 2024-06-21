<script lang="ts">
	import { cn } from "common/src/utils/cn";

	export let className: string | undefined = undefined;
</script>

<div
	class={cn(
		"card-body relative w-full",
		//container queries
		"@5xl:z-10 @5xl:items-center @5xl:bg-base-200 @5xl:bg-opacity-30 @5xl:py-40",
		className
	)}
>
	<div class="flex h-full flex-col justify-between gap-4 @5xl:text-center"><slot /></div>
</div>
