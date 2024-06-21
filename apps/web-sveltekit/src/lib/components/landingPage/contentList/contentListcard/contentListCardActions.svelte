<script lang="ts">
	import { cn } from "common/src/utils/cn";

	export let className: string | undefined = undefined;
</script>

<div class={cn("card-actions @5xl:mt-10", className)}><slot /></div>
