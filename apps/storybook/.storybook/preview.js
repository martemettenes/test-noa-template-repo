/** @type { import('@storybook/react').Preview } */
//import styles from Tailwind CSS
import "../styles/styles.css";

// .storybook/preview.js

const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
