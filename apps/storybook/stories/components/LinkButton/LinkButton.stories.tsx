import React from "react";
import { LinkButton } from "ui/react";

export default {
	title: "Components/Link Button",
	component: LinkButton,
};

const Template = (args) => <LinkButton {...args} />;
export const Default = Template.bind({});
Default.args = {
	children: "Link button",
	variant: "default",
	href: "https://www.google.com",
	size: "md",
	wide: false,
};
