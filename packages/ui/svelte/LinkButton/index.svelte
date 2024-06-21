<script lang="ts">
	import { buttonClass } from "../Button/styles";
	import type { ButtonVariant, ButtonSize } from "../Button/types";

	// Props
	export let variant: ButtonVariant = "default";
	export let buttonSize: ButtonSize = "md";
	export let wide: boolean = false;
	export let className: string = "";
	export let href: string;
	export let noScroll: boolean = false;
</script>

<a {href} data-sveltekit-noscroll={noScroll} class={buttonClass({ variant, buttonSize, wide, className })}
	><slot /></a
>
