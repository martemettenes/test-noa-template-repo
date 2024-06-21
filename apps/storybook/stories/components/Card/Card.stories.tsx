import React from "react";
import { Card } from "ui/react";

export default {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
};

export const Default = () => (
	<Card border className="w-80" shadow>
		<Card.Banner>
			<img src="https://picsum.photos/800/400" />
		</Card.Banner>
		<Card.Body>
			<h3 className="text-2xl font-bold">Card title</h3>
			<p className="text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
			</p>
			<Card.Actions>
				<button className="btn btn-primary">Button</button>
			</Card.Actions>
		</Card.Body>
	</Card>
);
