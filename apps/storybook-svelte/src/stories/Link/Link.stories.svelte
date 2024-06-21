<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { Link } from "ui/svelte";
</script>

<Meta
	argTypes={{
		variant: {
			options: ["primary", "secondary", "neutral", "accent", "success", "info", "warning", "error", "hover"],
			control: { type: "select" },
		},
	}}
	title="Components/Link"
	component={Link}
/>

<Template let:args>
	<Link {...args}>Link</Link>
</Template>

<Story source name="Neutral" args={{ variant: "neutral" }} />
<Story source name="Primary" args={{ variant: "primary" }} />
<Story source name="Secondary" args={{ variant: "secondary" }} />
<Story source name="Accent" args={{ variant: "accent" }} />
<Story source name="Success" args={{ variant: "success" }} />
<Story source name="Info" args={{ variant: "info" }} />
<Story source name="Warning" args={{ variant: "warning" }} />
<Story source name="Error" args={{ variant: "error" }} />
<Story source name="Hover" args={{ variant: "hover" }} />
