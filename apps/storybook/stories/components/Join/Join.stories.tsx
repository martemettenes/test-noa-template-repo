import React from "react";
import { Button, Join } from "ui/react";

export default {
	title: "Components/Join",
	component: Join,
};

const Template = (args) => (
	<Join {...args}>
		<Button className="join-item" ariaLabel="button 1">
			Button 1
		</Button>
		<Button className="join-item" ariaLabel="button 2">
			Button 2
		</Button>
		<Button className="join-item" ariaLabel="button 3">
			Button 3
		</Button>
	</Join>
);

export const Default = Template.bind({});
Default.args = {
	direction: "horizontal",
};
