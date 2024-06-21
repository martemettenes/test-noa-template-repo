<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import { FacadeYoutube } from "ui/svelte";
</script>

<Meta
	title="Components/Youtube"
	component={FacadeYoutube}
	argTypes={{
		url: {
			description: "The url for the Youtube video",
			control: { type: "text" },
		}
	}}
/>

<Template let:args>
	<FacadeYoutube {...args} />
</Template>

<Story source name="Demo" args={{ url: "https://youtu.be/5nKk_-Lvhzo" }} />