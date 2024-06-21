---
title: Next.js
---

## Next.js apps

There is 1 Next.js project that is being maintained.

-   **next-website-app-dir** - Uses the app router

## Getting started

:::admonition type="info"
You need to setup you own Sanity instance and add the config to the project in order to run it.
:::

To run the project locally, first create a file called `.env.local`. You can copy the env vars from `.env.example`. All the values for the Sanity variables you'll find when setting up your Sanity project ([see the Sanity documentation](/docs/apps/sanity-studio)).

### Debugging

If you are using Visual Studio Code, there are 5 launch scripts provided. Use them from the debugger menu.

Note that the Edge debugger requires the [Edge Tools for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools).

-   For Mac/Linux:

    -   `Next: Node` - Runs the Next server
    -   `Next: Edge` - Opens the Next site in the Edge browser
    -   `Next: Full (Mac/Linux)` - Runs the server and opens the site in the Edge browser

-   For Windows:

    -   `Next: Node` - Runs the Next server
    -   `Next: Node Windows` - Runs the Next server
    -   `Next: Full (Windows)` - Runs the server and opens the site in the Edge browser

:::admonition type="tip"
If you want to use Chrome instead of Edge, you can create a new launch script for that.
:::

## Structure

This document will explain the main concepts of this Next project. However, for more details you should look at the provided example files and read the inline documentation in the code.

### Organizing files and folders

In this project, the `lib` folder contains all components, and any other local utils. The lib folder is for code which isn't a page, layout or other file which must reside in a special folder.

-   `/lib/components` - All local react components
-   `/lib/config` - Configuration
-   ...other

### Routing/pages

All routing in Next.js is handled by the file structure in the `/app` folder (app router).

### Sanity preview

Sanity preview works by calling an api route (`app/api/preview`) from within Sanity. This api route will disable any caching and set a cookie which will cause `draftMode().isEnabled` for all pages to become true.

-   **Sanity client.** Take a look at the client used to talk to the Sanity api: `common/src/clients/sanityClient.ts`. You want to use a slightly different client based on whether you want preview data or not. The `getSanityClient()` function returns the correct version based on whether the boolean param is true or not.
-   **Api preview route.** The `app/api/preview` route defines what to with the different preview paths coming from Sanity Studio. See the file for inline comments.

### Rendering Sanity components using serializers

This section is about serializing Sanity components into React components.

:::admonition type="info"
Please see the [Sanity documentation](/docs/apps/sanity-studio) about components to get an overview of the fundamental differences between the different types of components.
:::

There are two serializers, one for portable text and one for landing page components. For this example, global components can only appear as landing page components.

The **landing page component serializer** can be found here: `lib/components/landingPage/index.tsx`. This serializer is quite straight forward. It simply maps Sanity component types to React components. See the serializer file for more details.

The **portable text serializer** is using block content or portable text serializing as defined by Sanity. Since Next.js is build on React the [portable text to React](https://github.com/portabletext/react-portabletext) module is used. The actual serializer rules can be found in `lib/components/portableText/index.tsx`, and an example of using it can be found in the article page component here: `lib/components/pageComponents/articlePageComponent/index.tsx`.

For an introduction to portable text, Sanity ha written up an [introduction article](https://www.sanity.io/guides/introduction-to-portable-text).

### Sitemaps

:::admonition type="warning"
PS: The robots.txt route is set to not allow indexing since this is a demo repo. You should probably change this.
:::

The project is using a [route handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) to dynamically generate a sitemap (and robots.txt) and cache it. An example of this can be found in the `sitemap.xml` folder.

## SEO for the app router projects

When using the app router, Next has build in support for SEO using the `metadata` export (static) or by exporting the `generateMetadata` function.
This has been implemented for all pages in the project using the app router. For more info, see [the metadata docs.](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

-   The main `app/layout.tsx` file configures the basic metadata, which is then overridden by the individual pages
