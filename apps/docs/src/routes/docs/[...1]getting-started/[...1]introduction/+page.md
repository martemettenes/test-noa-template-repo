---
title: Introduction
---

## Introduction

The Noa Ignite template monorepo (using [Turborepo](https://turbo.build/)) is meant as a template for creating new projects when working with Sanity, Next.js (or SvelteKit) and React/Svelte components and more. The repo is also intended as a "guide" for how to structure your apps and packages.

:::admonition type="info"
All the apps, packages and documentation assumes that you have at least some knowledge of how to work with both Sanity, React, SvelteKit or Next projects. This is not a "getting started" ...thing 🤓
:::

## Releases

For all releases, please see the [release log](https://github.com/makingwaves/sanity-next-component-template-repo/blob/main/releases.md)

## Gaining access to the repo

**The repository is only accessible for NoA Ignite employees.**

The repo can be found here: [https://github.com/makingwaves/sanity-next-component-template-repo](https://github.com/makingwaves/sanity-next-component-template-repo)

## What's inside?

This [Turborepo](https://turbo.build/) uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

-   `/apps/docs`: This is the documentation you are reading now.
-   `/apps/next-website-app-dir`: A Next.js site using the app router
-   `/apps/sanity-studio`: Sanity Studio
-   `/apps/storybook`: A Storybook setup for testing React/Next UI components
-   `/apps/storybook-svelte`: A Storybook setup for testing Svelte UI components
-   `/apps/web-sveltekit`: A SvelteKit website
-   `/packages/common`: Utils that are used in multiple apps
-   `/packages/ui`: React UI components

### Global commands

These are command you can run at the root of the monorepo in order to test multiple apps and packages in one operation. This is typically used for linting all projects and stuff like that. It's not necessary to build all projects from root. It will only affect apps and packages that have the commands defined.

:::admonition type="note"
You need to be at the root of the project for this to work.
:::

-   Build all apps and packages - `yarn build`
-   Lint all apps and packages - `yarn lint`
-   Check formatting for all apps and packages - `yarn prettier:check`

## Working with the apps and packages

**It's recommended to open the apps and packages in separate editor windows**. For example if you are going to work on the next site found in `/apps/next-website`, you should open this folder in a separate editor window. This will make debugging possible and it's probably easier to keep track of files.

## Useful Links

Learn more about Turborepo:

-   [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
-   [Caching](https://turborepo.org/docs/core-concepts/caching)
-   [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
-   [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
-   [Configuration Options](https://turborepo.org/docs/reference/configuration)
-   [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Contributing and reporting bugs

If you find a bug; Create a branch, fix the bug, and create a pull request. Please describe what has been fixed and why. You can assign the pull-request to any of the admins.

If you have a suggestion for a new feature or you feel that something should be changed, open an issue so the item can be discussed.

Always be polite and describe pull-requests and issues so other people can understand them. 🤓
