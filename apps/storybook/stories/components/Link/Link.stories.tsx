import React from "react";
import { Link } from "ui/react";

export default {
	title: "Components/Link",
	component: Link,
};

const Template = (args) => <Link {...args} />;
export const Default = Template.bind({});
Default.args = {
	children: "Link",
	href: "https://www.google.com",
	variant: "neutral",
};
