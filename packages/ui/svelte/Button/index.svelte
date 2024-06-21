<script lang="ts">
	import type { ButtonVariant, ButtonSize } from "./types";
	import { buttonClass } from "./styles";

	// Props
	export let variant: ButtonVariant = "default";
	export let buttonSize: ButtonSize = "md";
	export let disabled: boolean = false;
	export let wide: boolean = false;
	export let className: string = "";
	export let onClick: (event: MouseEvent) => void = () => {};
</script>

<button {disabled} on:click={onClick} class={buttonClass({ variant, buttonSize, wide, className })}>
	<slot />
</button>
