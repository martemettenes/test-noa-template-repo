<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import { FacadeVimeo } from "ui/svelte";
</script>

<Meta
	title="Components/Vimeo"
	component={FacadeVimeo}
	argTypes={{
		url: {
			description: "The url for the Vimeo video",
			control: { type: "text" },
		}
	}}
/>

<Template let:args>
	<FacadeVimeo {...args} />
</Template>

<Story source name="Demo" args={{ url: "https://vimeo.com/100317000" }} />