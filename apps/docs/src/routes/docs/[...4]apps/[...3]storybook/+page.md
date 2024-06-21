---
title: Storybook
---

Storybook is a tool for developing and testing frontend components in isolation. This project is meant as a starting point for using Storybook 7 with React or Svelte. It includes a set of example components.

## Project overview

-   The project uses Typescript
-   This project has a setup for using Tailwind together with DaisyUI
-   This project uses the new Storybook 7 component story format

## Getting started and notes

-   Clone the repo
-   Run `yarn install`
-   Run Storybook locally `yarn storybook`
-   Build Storybook `yarn build-storybook`
-   Serve Storybook `yarn serve-storybook`

## Writing stories

Storybook uses a concept called "stories" to represent components. Stories are written in a file with the extension `.stories.tsx` and are placed in the same folder as the component they represent. Storybook will automatically find these files and display them in the UI. The file name is used as the story name. Check out the stories docs for more information on how to set up stories in Storybook 7: [https://storybook.js.org/docs/react/writing-stories/introduction](https://storybook.js.org/docs/react/writing-stories/introduction)

:::admonition type="info"
There is a VSCode setting for handling `@tailwind` directives in the styles/index.css file.
:::

Storybook needs to be installed into a project that is already set up with a framework. Storybook will look into your project's dependencies during its install process and detect that React is percent and provide you with the best configuration available.

Storybook docs: [https://storybook.js.org/docs/react/get-started/install](https://storybook.js.org/docs/react/get-started/install)