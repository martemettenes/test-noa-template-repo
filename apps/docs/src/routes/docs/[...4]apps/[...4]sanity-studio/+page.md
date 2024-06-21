---
title: Sanity Studio
---

## Getting started

-   cd into the Sanity Studio project
-   Run `npx -y sanity@latest init --env`
    -   This allows you to link to an existing project or create a new one
    -   It also creates a basic .env file
-   Add the needed env vars to the newly created `.env`.
    -   You can copy the env vars from the `.env.example`file. For the `SANITY_STUDIO_PREVIEW_TOKEN` you can use a key generator and create a long string. (This key should also be used in the Next/SvelteKit project env vars.)
-   Run `yarn install` (or convert to npm/pnpm..)

:::admonition type="info"
There is a VSCode launch config for debugging in Edge. This allows inline debugging.
:::

## Structure

There are two main folder where most of the action happens:

1. `schemas` - All the schema definitions
2. `deskStructure` - Setup for the Sanity desk plugin

> Note that the schema types are stored in the `common` package in the same monorepo

In addition there is a file `resolveProductionUrl.ts`, which handles generating preview urls for the website project(s).

### Schemas

The schema files are organised into documents and objects. Documents are schemas that will in most cases show up as an editable document in the Studio ui. While objects are used as building blocks inside of a document. All documents and objects have been wrapped using `defineType` and `defineField`.

### Desk structure or Structure builder

The desk structure defines the UI for the studio using the structure builder. For more information about how this works, this see the [official documentation.](https://www.sanity.io/docs/overview-structure-builder)

In the template repo there are two concepts used for the structure builder setup. These two concepts are the root folders of Sanity Studio and are called «Content» and «Site builder».

#### Content

These are schemas that only describe structure, and not presentation. This means that there is no way for an editor to control the presentation of a book from within the book schema.

In our demo the «content» consists of books, authors, categories and reviews. Books, categories and reviews all have pages in the Next project, but critically - the UI or presentation is entirely controlled by the Next project.

:::admonition type="tip"
This way of storing data - separate from presentation - is the recommended way of storing data in Sanity. So if at all possible, try to separate the presentation from the data.
:::

#### Site builder

In most projects though, the editor probably wants to control the presentation of the site, app, etc from Sanity Studio. For our example we are assuming that the frontend is a website.

This is where the «Site Builder» comes into play. This part is mainly focused on content which is intermingled with presentation. One such piece of content is a page, or a page component.

The Site Builder allows the editors to control the order of the presentational components; in other words, it allows them to build the site, hence Site Builder.

The rest of this document goes into the idea and implementation of the «Site builder» concept. So, read on.

## Page templates

There are two page templates of interest:

-   Dynamic articles (`schemas/documents/article`)
-   Landing pages (`schemas/documents/landingPage`)

### Dynamic articles

A dynamic article is a template intended for text heavy content, such as articles (as not to be confused with the template type).

Dynamic articles have two parts:

-   A collection
-   The article document itself

A _collection_ allows an editor to create groups of articles, which will also affect the url of the output. This adds extra flexibility for the editor while keeping the structure tidy and easy to implement in the Next project.

The _article document_ itself belongs to a collection and can have any field needed. The main part is the content blocks (`blockContainer`). This block allows an editor to mix components and formatted text freely, and makes sure that the content can be serialised in one location in the Next project.

### Landing pages

Landing pages are more "controlled" compared to article templates. This template gives the editor the freedom to add, remove and re-order a set of «block components» (see below). However, each component explicitly defines what is allowed, there is no mixing of text and components like for the article template.

## Components

There are two main types of components:

-   Inline components (used by portable text)
-   Block components (or landing page components)

### Inline and block components

**Inline components** are typically used in conjunction with portable text, typically in article templates. Typical components are images, videos, buttons and other components which makes sense to intermingle them with formatted text.

These type of components doesn't have localization support since they are used together with text. An example: When using block content or portable text field, you should have one portable text field for each language. Given this, it doesn't make sense to have localization support embedded within block content components.

**Block components** (or landing page components) are components used to build an entire page, typically for a landing page template. These are components such as hero components, product carousels and similar. These components have build in localization, allowing the editor to create one layout for a landing page and still support multiple languages.

### Local vs global

**Local components** are objects where the content is a part of the document where the component is created. These components are only editable from the document where they are created.

**Global components** are references to a separate document. A global component owns its own schema and content. These components will show the same content on for all documents they are used and can be edited separately from the document itself.

## Previewing documents

The Sanity Studio project has a custom component (apps/sanity-studio/components/Preview) that is used for previewing a document. In order for this to work the Preview component must be added to the desk structure for the document you want to add preview support. There are several example showing this in the Studio app, for instance the home page here: `apps/sanity-studio/deskStructure/siteBuilder/pages/homePage`.

The Preview component will also validate the document before trying to preview it. You can read more about validation [in the validation documentation](/docs/other/validation).
