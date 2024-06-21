<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { Badge } from "ui/svelte";
</script>

<Meta
	argTypes={{
		variant: {
			description:"The variant of the badge",
			options: ["neutral", "primary", "secondary", "success", "accent", "ghost", "warning", "error", "info"],
			control: { type: "select" },
		},
		size: {
			description: "The size of the badge",
			options: ["xs", "sm", "md", "lg"],
			control: { type: "select" },
		},
	}}
	title="Components/Badge"
	component={Badge}
/>

<Template let:args>
	<Badge {...args}>Badge</Badge>
</Template>

<Story source name="Neutral" args={{ variant: "neutral" }} />
<Story source name="Primary" args={{ variant: "primary" }} />
<Story source name="Secondary" args={{ variant: "secondary" }} />
<Story source name="Success" args={{ variant: "success" }} />
<Story source name="Accent" args={{ variant: "accent" }} />
<Story source name="Ghost" args={{ variant: "ghost" }} />
<Story source name="Warning" args={{ variant: "warning" }} />
<Story source name="Error" args={{ variant: "error" }} />
<Story source name="Info" args={{ variant: "info" }} />
