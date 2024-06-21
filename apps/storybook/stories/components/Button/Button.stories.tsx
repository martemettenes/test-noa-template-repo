import React from "react";
import { Button } from "ui/react";

export default {
	title: "Components/Button",
	component: Button,
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
	children: "Button",
	variant: "default",
	size: "md",
	wide: false,
};
