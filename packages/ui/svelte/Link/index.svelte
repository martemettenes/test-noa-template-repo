<script lang="ts">
	import { cn } from "common/src/utils/cn";

	export let href: string;
	export let variant:
		| "primary"
		| "secondary"
		| "neutral"
		| "accent"
		| "success"
		| "info"
		| "warning"
		| "error"
		| "hover" = "neutral";
	export let className: string = "";

	const componentClass = cn(
		"link",
		{
			"link-primary": variant === "primary",
			"link-secondary": variant === "secondary",
			"link-neutral": variant === "neutral",
			"link-accent": variant === "accent",
			"link-success": variant === "success",
			"link-info": variant === "info",
			"link-warning": variant === "warning",
			"link-error": variant === "error",
			"link-hover": variant === "hover",
		},
		className
	);
</script>

<a class={componentClass} {href}><slot /></a>
