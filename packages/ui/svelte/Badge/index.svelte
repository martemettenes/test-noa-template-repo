<script lang="ts">
	import { cn } from "common/src/utils/cn";

	export let variant:
		| "neutral"
		| "primary"
		| "secondary"
		| "success"
		| "accent"
		| "ghost"
		| "warning"
		| "error"
		| "info"
		| "outline" = "neutral";
	export let size: "xs" | "sm" | "md" | "lg" = "md";
	export let className: string = "";

	const componentClass = cn(
		"badge",
		{
			"badge-neutral": variant === "neutral",
			"badge-primary": variant === "primary",
			"badge-secondary": variant === "secondary",
			"badge-success": variant === "success",
			"badge-accent": variant === "accent",
			"badge-ghost": variant === "ghost",
			"badge-warning": variant === "warning",
			"badge-error": variant === "error",
			"badge-info": variant === "info",
			"badge-outline": variant === "outline",
			"badge-xs": size === "xs",
			"badge-sm": size === "sm",
			"badge-md": size === "md",
			"badge-lg": size === "lg",
		},
		className
	);
</script>

<span class={componentClass}><slot /></span>
