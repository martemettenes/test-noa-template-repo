# NoA Ignite Template monorepo

This monorepo (using turborepo) is meant as a template for creating new projects when working with Sanity, Next.js (or SvelteKit) and React/Svelte components. The repo is meant as a "guide" for how to structure your apps and packages. You _can_ clone the repo and adjust it to your needs, but it's probably better to start your own monorepo and pick individual parts from this repo.

> Disclaimer: The SvelteKit app is for educational purposes. It's existence is in no way an indication NoA Ignite will officially use SveltKit in active or future projects.

> PS: All the apps, packages and documentation assumes that you have at least some knowledge of how to work with both Sanity, React, SvelteKit or Next projects. This is not a "getting started" ...thing 🤓

## Releases

For all releases, please see the [release log](releases.md)

## Documentation

- Documentation for the different apps and packages can be found here [https://template-docs.vercel.app](https://template-docs.vercel.app).
- For how to use Turborepo, please refer to the [Turborepo documentation](https://turborepo.org/docs).

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Build everything

To build all apps and packages, run the `yarn build` from the root of the project. Since this repo doesn't actually build the packages for distribution you'll never need to use this command. Use the build command for the app instead, it's faster.

## Working with the apps and packages

**It's recommended to open the apps and packages in separate editor windows**. For example if you are going to work on the next site found in `/apps/next-website`, you should open this folder in a separate editor window. This will make debugging possible and it's probably easier to keep track of files.

## Useful Links

Learn more about Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Contributing and reporting bugs

If you find a bug; Fork the repo, fix the bug, and create a pull request. Please describe what has been fixed and why. You can assign the pull-request to any of the admins.

If you have a suggestion for a new feature or you feel that something should be changed, open an issue so the item can be discussed.

Always be polite and describe pull-requests and issues so other people can understand them.
