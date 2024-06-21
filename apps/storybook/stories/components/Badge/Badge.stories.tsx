import React from "react";
import { Badge } from "ui/react";

export default {
	title: "Components/Badge",
	component: Badge,
};

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});
Default.args = {
	children: "Badge",
	variant: "neutral",
	size: "md",
};
