<script lang="ts">
	import Warning from "../icons/warning.svelte";
	import Error from "../icons/error.svelte";
	import Info from "../icons/info.svelte";
	import Success from "../icons/success.svelte";
	import { cn } from "common/src/utils/cn";

	export let alertType: "warn" | "error" | "info" | "success" = "info";
	export let title: string = "";
	export let className: string = "";
</script>

<div
	class={cn(
		"alert",
		{
			"alert-error": alertType === "error",
			"alert-info": alertType === "info",
			"alert-warning": alertType === "warn",
			"alert-success": alertType === "success",
		},
		className
	)}
>
	{#if alertType === "warn"}
		<Warning />
	{:else if alertType === "error"}
		<Error />
	{:else if alertType === "info"}
		<Info />
	{:else if alertType === "success"}
		<Success />
	{/if}
	<div>
		{#if title}
			<p class="font-bold">{title}</p>
		{/if}
		<slot />
	</div>
</div>
