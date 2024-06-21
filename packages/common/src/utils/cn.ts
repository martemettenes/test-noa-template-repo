import classnames, { type ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

// A function for conditionally merging tailwind classes together without conflicts
export const cn = (...args: ArgumentArray) => {
	return twMerge(classnames(...args));
};
