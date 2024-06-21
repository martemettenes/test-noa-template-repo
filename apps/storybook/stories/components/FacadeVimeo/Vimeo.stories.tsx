import React from "react";
import { FacadeVimeo } from "ui/react";

export default {
	title: "Components/Vimeo",
	component: FacadeVimeo,
};

const Template = (args) => <FacadeVimeo {...args} />;
export const Default = Template.bind({});
Default.args = {
	url: "https://vimeo.com/100317000",
};
