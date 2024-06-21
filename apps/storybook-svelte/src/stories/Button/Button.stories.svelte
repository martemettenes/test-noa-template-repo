<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { Button } from "ui/svelte";
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
	title="Components/Button"
	component={Button}
/>

<Template let:args>
	<Button onClick={() => console.log("hello world")} {...args}>Button</Button>
</Template>

<Story source name="Primary" args={{ variant: "primary" }} />
<Story source name="Default" args={{ variant: "default" }} />
<Story source name="Secondary" args={{ variant: "secondary" }} />
<Story source name="Accent" args={{ variant: "accent" }} />
<Story source name="Ghost" args={{ variant: "ghost" }} />
<Story source name="Neutral" args={{ variant: "neutral" }} />
