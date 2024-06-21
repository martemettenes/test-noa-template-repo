---
title: Configuration
---

## Prettier

All projects in the monorepo is using the same prettier config. This config is located in `packages/config/prettier.js`.
All projects do contain either a `.prettierrc.js` or a `.prettierrc.cjs` file. These files simply extends the root prettier config listed above.

```js
module.exports = {
	...require("../../packages/config/prettier"),
};
```

If you for some reason need to override the prettier config for one project, you can add you own config to the local config file like so:

```js
module.exports = {
	...require("../../packages/config/prettier"),
	myConfig: value,
};
```

## Tailwind

The package `/config` has a shared Tailwind presets config. This shared config is used by the Next app (`apps/next-website-app-dir/tailwind.config.js`).

The shared preset can be imported into the local Tailwind config like this:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["...."],
	presets: [require("../../packages/config/tailwind/preset")],
	// so on...
};
```

## tsconfig

Config for tsconfig is specific to each app or package.
