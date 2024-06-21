<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { LinkButton } from "ui/svelte";
</script>

<Meta
	argTypes={{
		variant: {
			description: "The variant of the button",
			options: ["primary", "default", "secondary", "accent", "ghost", "neutral"],
			control: { type: "select" },
		},
		buttonSize: {
			description: "The size of the button",
			options: ["xs", "sm", "md", "lg"],
			control: { type: "select" },
		},
	}}
	args={{
		buttonSize: "md",
	}}
	title="Components/LinkButton"
	component={LinkButton}
/>

<Template let:args>
	<LinkButton href="https://www.vg.no/" {...args}>Link Button</LinkButton>
</Template>

<Story source name="Primary" args={{ variant: "primary" }} />
<Story source name="Default" args={{ variant: "default" }} />
<Story source name="Secondary" args={{ variant: "secondary" }} />
<Story source name="Accent" args={{ variant: "accent" }} />
<Story source name="Ghost" args={{ variant: "ghost" }} />
<Story source name="Neutral" args={{ variant: "neutral" }} />
