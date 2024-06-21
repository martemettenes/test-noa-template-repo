---
title: Packages (Yarn)
---

## Working with Yarn packages (node modules)

The monorepo uses [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to handle packages (node modules).

This means that you can run commands such as `yarn install`, `yarn outdated` and `yarn upgrade` from any folder in the project, and affect all projects at the same time. Adding or removing packages are done per app or package.

## Adding or removing packages

If you are going to add or remove a new package, then you need to be at the correct path.

> If you have followed the recommendation and opened the VSCode project in a separate window, then you're already at the correct path in the internal terminal.

## Checking for outdated packages and upgrading

From any project or path you can run `yarn outdated`. This will give you a list of packages that have an available upgrade.

You can then run `yarn upgrade` to upgrade all **minor and patch** versions.

To upgrade to the latest major version you can use `yarn upgrade-interactive --latest`. This allows you to select which package to upgrade.

### Checking which version of a package is installed

Let's say that you have `apps/next-website-app-dir-intl` open in VSCode and you want to figure out which version of Next you are running.

Looking at package.json will not get you the correct answer since this will only indicate the major version. The actual version is stored in the `yarn.lock` file. Running the `yarn list --depth=0 --pattern "next"` command will give you the full version.
