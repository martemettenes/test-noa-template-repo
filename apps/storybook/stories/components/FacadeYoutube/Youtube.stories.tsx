import React from "react";
import { FacadeYoutube } from "ui/react";

export default {
	title: "Components/Youtube",
	component: FacadeYoutube,
};

const Template = (args) => <FacadeYoutube {...args} />;
export const Default = Template.bind({});
Default.args = {
	url: "https://youtu.be/5nKk_-Lvhzo",
};
