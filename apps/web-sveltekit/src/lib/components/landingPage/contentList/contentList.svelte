<script lang="ts">
	import { cn } from "common/src/utils/cn";

	export let title: string;
	export let className: string | undefined = undefined;
</script>

<!-- Outer container for contentList components -->
<section class={cn("prose col-span-full max-w-full px-4 py-10", className)}>
	<h2>{title}</h2>
	<ul class="flex grid-flow-row flex-col gap-4 pl-0 md:grid md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
		<slot />
	</ul>
</section>
