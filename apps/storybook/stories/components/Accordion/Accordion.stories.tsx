import React from "react";
import { Accordion } from "ui/react";

export default {
	title: "Components/Accordion",
	component: Accordion,
};

const Template = (args) => <Accordion {...args} />;
export const Default = Template.bind({});
Default.args = {
	title: "Accordion title",
	name: "accordion",
	indicator: "arrow",
	children: "Here goes the content",
};
