<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { Card, CardBody, CardActions, CardBanner, LinkButton } from "ui/svelte";
</script>

<Meta
	title="Components/Card"
	component={Card}
/>

<Template let:args>
	<Card {...args} border>
        <CardBanner>
            <img class="w-full" alt="" src="https://picsum.photos/800/400" />
        </CardBanner>
        <CardBody>
            <p>A card component is a UI element that is used to display information in a structured and visually appealing way. It typically consists of a container with a header, body, and footer, and can contain various types of content such as text, images, and buttons. Cards are commonly used in web and mobile applications to display content such as articles, products, or user profiles. They are often used in a grid layout to display multiple cards at once, and can be customized with different styles and colors to fit the design of the application.</p>
            <CardActions>
                <LinkButton variant="primary" href="/">Read more</LinkButton>
            </CardActions>
        </CardBody>
    </Card>
</Template>

<Story source name="Primary" />