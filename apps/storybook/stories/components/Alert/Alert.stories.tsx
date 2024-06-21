import React from "react";
import { Alert } from "ui/react";

export default {
	title: "Components/Alert",
	component: Alert,
};

const Template = (args) => <Alert {...args} />;
export const Default = Template.bind({});
Default.args = {
	children: "This is the alert text",
	alertType: "info",
	title: "This is the alert title",
};
