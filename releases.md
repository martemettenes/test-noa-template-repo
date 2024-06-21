## 15.05.2024

* Sanity Studio
	* Introduces a custom preview component that handles validation before showing the preview. (apps/sanity-studio/components/Preview.tsx)
* Updates all Zod schemas to match Sanity validation rules
* Adds an example of data validation to the SvelteKit project
	* apps/web-sveltekit/src/routes/+page.server.ts
* Adds an example of data validation to the Next project
	* apps/next-website-app-dir/app/page.tsx
* Updates doc with a new section on using Zod validation. Also updates other sections to cover the change from static types to Zod schemas and types.

## 14.05.2024

* All types in «packages/common/src/types» are now defined using Zod schemas. This is in preparation for introducing validation in Studio and content fetching in a later release.
* Misc
	* Typescript strict mode now set to true for common and ui
	* Removes the «types/sanity-intl» folder from common
	* Removes the «@sanity/types» package from common

## 10.05.2024

* Updates packages

## 09.04.2024

* Updates packages

## 11.03.2024

* The fallback device pixel ratio used by the Sanity Image components is now set to 1. This fixes an issue with certain Windows versions where `window.devicePixelRatio` can sometimes be undefined.

## 19.02.2024

* Sanity Studio
	* Sanity preview is now using the default preview system. 
	* Removes the iframe component.
	* Fixes some types for `resolveProductionUrl`
	* Migrates Studio from `sanity/desk` to `sanity/structure`
* Updates npm packages

## 08.01.2024

* Some updates to the Sanity Image utils in common
	* The default `devicePixelRatio` is now 1 (was 1)
	* The `deviceWidths` now supports smaller sized to allow devices with smaller screens to get more optimized images
* Updates external packages

## 18.12.2023

* Both Sanity Image components now has a quality prop that defaults to 65%.
* Upgrades all SvelteKit projects to SvelteKit 2.

## 12.12.2023

* Fixes an issue with the prettier config for the SvelteKit project

## 28.11.2023

* Fixes an issue where the UI component (UI package) `svelte/SanityImage` would not handle reactivity correctly when navigating using the client router.

## 23.11.2023

* Updates npm packages
	* Next updated to v14.x
* Adds a util `portableTextToPlainText` that take a Portable Text object and returns a string.
* Adds a util `arraysEqual` which compares two arrays.

## 23.10.2023

* Removes the `bootstrap` shell script since it's no longer needed

## 17.10.2023

* The types for the Sanity client now separates between client and server. This is to make it easier to not pass an api token to the client side, when for instance using an image.
* The Sanity client in `common/src/clients/sanityClient.ts` will now handle the `useCdn` and `apiVersion` settings properly if these values are not passed.
* Updates common, the Next app and the SvelteKit app to handle the updates above.

## 16.10.2023

* Deletes all projects and code related to localization. This will show up as demos later.
* Adds robots.txt and sitemap.xml routes for the SvelteKit site
* Removes all docs related to localization.
* All Sanity API requests are now using «perspectives».
	* Updates the Sanity client in common
	* Updates all data methods (and groq) in common
	* Removes the «filterDataToSingleItem» from common, since it's no longer needed

## 09.10.2023

* Fixes a confusing setup in the Sanity config in common which made the `useCdn` status a bit unclear.
* Updates how the Sanity config is used for the Next projects to make things more clear.

## 21.09.2023

* The SvelteKit project has now been updated to to have the full functionality of the bookstore concept. This includes all Svelte UI components, Storybook for Svelte and all server functionality.

## 14.09.2023

* Adds more svelte components in packages/ui
	* Badge
	* Link
	* Alert
	* Icons
	* Vimeo (facade)
	* Youtube (facade)
* Adds prettier handling for svelte files in storybook-svelte with prettier-plugin-svelte
* Updated doc to include Svelte components and the SvelteKit based Storybook app.
* Adds a Youtube facade component for React in the UI package.

## 13.09.2023

* Adds a new project for Storybook 7 with SvelteKit.
	* Documentation for this project can be found in apps/storybook-svelte/README.md
* Adds a new folder structure for packages/ui as it now contains components for both React/Next and Svelte.
	* Components are now imported from "ui/react" and "ui/svelte" instead of "ui/components/..".
	* Imports are updated across the different apps.

## 12.09.2023

* Adds a React «facade» video component for Vimeo videos to UI and Storybook.
* Adds a VSCode debug script for Storybook for React

## 11.09.2023

* Removes all paths from tsconfig for all the common package, and updates all imports using these mappings. Updates tsconfig files for all apps using path mappings.
	* This was removed since it would sometimes confuse the TS compiler when being used in a monorepo, as well as needing a lot of code duplication.
	* paths locally for the apps remain.

## 08.09.2023

* Adds a demo setup for Github Workflows (see the .github folder)

## 06.09.2023

* Some updates for the Playwright config in the Next app to make it easier to run tests.
* Adds a Playwright test to the Next app to test the login flow for writing a book review.

## 05.09.2023

* Fixes an issue which prevented the review page to detect that the user had logged in. This is related to an issue in Next. Added comments to the login page (/apps/next-website-app-dir/app/login/page.tsx) to describe the issue and how to get around it.

## 04.09.2023 (v2.0.0)

TLDR; This update is big and is focused on making the template repo apps more usable when running demos for customers. There are now real UI components, multiple stories in Storybook and a demo of a book store implemented in Studio and Next. There's also many technical improvements!

* New Schema structure and desk for studio.
	* Introduces the initial version of a Book store concept for a better demonstation of the capabilities of Studio.
	* Added a import script for generating book data for Sanity. This can be used when testing the book store concept. You'll find the script in «/apps/sanity-studio/dummyData»
	* Introduces the idea of «Content» and «Page Builder» in Studio. See the docs for more info.
* Components and Storybook
	* There are now multiple components in the UI package and multiple stories in Storybook. This hopefully makes it easier to use the template projects for demonstrations.
* Websites
	* The Next website (apps/next-website-app-dir) gets the updates this time.
	* Updates all landing page and article components, updated page structures.
	* Adds listing of books, book categories and reviews
	* Adds a simulated login system
	* Adds the ability for logged in users to write reviews which are stored in Sanity.
	* And much more....
* Other
	* Updated quickstart docs
	* Updated localization docs.
	* The localized projects are now in maintenance mode, they will not get new functionality and will remain only as demos.
		* All test, build, lint scripts have been removed from demo projects since we don't want them to build via Turborepo.
	* Removes the global components Alert and InfoBox
	* Added a `bootstrap` shell script to make it easier to get started when cloning the repo (see the quick start docs).

## 18.08.2023

* Migrated Storybook to version 7

## 15.08.2023

* Replaces the SchemaType enum with a a constant object `schemaTypes`and a type `SchemaType` to describe the types. This is done since enums in Typescript can lead to code size issues, security issues, scalability issues, and maintainability issues and are no longer recommended.

## 14.08.2023

* Removes the `/apps/web-sveltekit-intl` project since it does no longer represents the best approach.
* Updates Svelte to v4
* Updates all packages to the latest versions

## 08.06.2023

- Makes the «react/SanityImage/index.tsx» more robust by waiting for the loader image to fully load before trying to grab the dimensions.

## 07.06.2023

- Fixes an issue in the «react/SanityImage/index.tsx» component where the width or height query param could in rare cases en up being 0.

## 03.06.2023

- All react ui components lives in ui/react
- The React AccessibleImage component is now called SanityImage
	- The component now supports the app dir and cropping and hotspots set in Studio
	- The component now lives in the UI package
	- The component now requires a sanity config prop

## 14.05.2023

- Fixes the exit-preview route for both Next apps

## 12.05.2023

- Next: Removes the appDir from the experimental config since appDir is now stable
- Updates npm packages
- Removes the legacy next-website project (and updates the docs)
- `yarn prettier:fix` will now also work for SvelteKit projects

## 05.05.2023 - Next app router preview route fix

- For both active Next projects: Works around an issue in the next «/api/preview» route where the redirects() function would refuse to set the draft cookie

## 04.05.2023 - Package updates and Route Handlers

- `template-next-pages` is deprecated.
- Docs reflects that `template-next-pages` is deprecated.
- Updates all npm packages, including major versions of Typescript
- Common gets a new eslint setup and some type fixes for some Sanity utils
- Now using Route Handlers and draftMode for [Studio] previews. This does not work right now, this will be updated once it gains support and documentation. It has to be updated since the `previewData` header was removed.🙃

## 08.03.2023 - Prettier config

- The prettier config is now shared between all projects
- Formats files not using the shared prettier config
- Adds documentation for the prettier config setup

## 24.02.2023 - Documentation site

- Introduces a separate documentation site project

## 24.02.2023 - Next 13.2

> No longer in Canary: The Metadata API (SEO), Route Handler (Server routes, see robots.txt)

- Upgrades all Next projects to Next 13.2
  - next-website
  - next-website-app-dir
  - next-website-app-dir-intl

## 22.02.2023 - Localization SvelteKit

- Introduces a new project `web-sveltekit-intl`. This is a fully localized SvelteKit project. It uses the same architecture as the localized Next project. Please read : [docs/localization.md](docs/localization.md) to get a better understanding on how this works.
- Adds some basic styling for both SvelteKit projects
- Fixes a PortableText bug by upgrading the Sanity PortableText package to the latest major version.
- Other updates and fixes for both SvelteKit projects

## 20.02.2023 - Migrates to Route Handlers + misc

- For both the Next app dir projects
  - Now using [route handlers](https://beta.nextjs.org/docs/routing/route-handlers) for robots.txt and sitemap.xml
  - Adds route segment config for «/sitemap.xml» and «/robots.txtx» routes
    - `/sitemap.xml` - ISR. Revalidates every 24 hour
    - `/robots.txt` - Static (default)
- Removes the next-sitemap package from `next-website-app-dir`
- Moves «getBaseUrl» to the «common» package

## 20.02.2023 - Package updates and bugfixes

- Updates packages to latest versions
- `next-website-app-dir-intl` is now on the latest next@canary
- Fixes a bug in `next-website-app-dir-intl`where `generateMetadata` was implemented wrong

## 17.02.2023 - Sitemap updates and misc

- middleware now ignores `/sitemap.xml` and `/robots.txt`
- robots.txt and sitemap.xml is implemented using pages routes (will be switched to Routing Handlers when stable)
- removes the «next-sitemap» package
- node-fetch gets added to «serverComponentsExternalPackages» (next.config)
- Locks the next.js version to `13.1.7-canary.10`, since canary 11 and above is causing build problems

## 17.02.2023 - Localization

- Introduces a new project `next-website-app-dir-intl`
- Introduces a new project in the app folder, `sanity-studio-intl`.

This project is a Next.js 13 project using /app dir with full localization support and a full Sanity Studio setup with localization support.
Also updates types in common and adds a new content folder in common for fetching localized data from Sanity.

Please read : [docs/localization.md](docs/localization.md) to get a better understanding on how this works.

## 14.02.2023 - Sanity localization project

- Introduces a new project in the app folder, `sanity-studio-intl`.
- This is a full Sanity Studio setup with localization support.

## 10.02.2023 - UI and docs updates

- Basic UI for footer and main menu for the Next app dir project
- Updates docs

## 09.02.2023 - Bugfix Sanity preview filter

- (bugfix) Fixes an issue where the Sanity document filter function would return a draft when preview was false
- (common) Using `@sanity/types` instead of custom document type
- (next-website) No longer using the `usePreviewSubscription` (this has been removed) hook for Sanity preview. Now using a simpler model where preview data is loaded via `getStaticProps`.

## 08.02.2023 - Basic SEO for the Next app dir project

- Disables crawler indexing (since this is a demo site)
- Data loading for all pages not handles «not found» cases
- Basic setup for SEO data in the app dir next project
  - Pages setup
  - Updated docs
  - Also see https://beta.nextjs.org/docs/guides/seo

## 01.02.2023 - Misc updates

- Adds some basic Jest tests to the common package (and some utils)
- Adds groq and a method for getting all landing pages (for sitemaps)
- For the Next app dir project
  - Will now generate a robots.txt, a static sitemap and a dynamic sitemap

## 26.01.2023 - Cleanup

- Removes the legacy version of Sanity Studio
- The V3 version of Sanity Studio is now just Sanity Studio
  - Renamed `/apps/sanity-studio-v3` to `/apps/sanity-studio`
- Updates packages
- (new) The `/apps/next-website-app-dir/` project now has a basic Playwright setup for running end-to-end tests on the site.
  Documentation in the readme file for the project.

## 04.01.2023 - Next 13.1

- Updates both Next projects to Next 13.1.1
- Now using the build in «transpilePackages» config, removes «next-transpile-modules»
- Updates and fixes all eslint actions and prettier. All these actions now has global support via turbo root commands
  - Fixes eslint for the UI package

## ... see pull-requests for older updates and releases
