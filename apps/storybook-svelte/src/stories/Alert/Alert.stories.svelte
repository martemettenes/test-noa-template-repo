<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import { Alert } from "ui/svelte";
</script>

<Meta
	title="Components/Alert"
	component={Alert}
	argTypes={{
		alertType: {
			description: "The type of the alert",
			options: ["warn", "error", "info", "success"],
			control: { type: "select" },
		},
		title: {
			description: "The title of the alert",
			control: { type: "text" },
		},
		className: {
			description: "The class name of the alert",
			control: { type: "text" },
		},
	}}
/>

<Template let:args>
	<Alert {...args}>This is an alert text</Alert>
</Template>

<Story source name="Info" args={{ alertType: "info" }} />
<Story source name="Error" args={{ alertType: "error" }} />
<Story source name="Warn" args={{ alertType: "warn" }} />
<Story source name="Success" args={{ alertType: "success" }} />
