---
title: Validating data
---

## Validating a document in Sanity Studio

In the provided Sanity Studio project there is a custom Preview component. This component will validate the schema of the document before trying to generate a preview URL. This means that the editor will get instant feedback on invalid documents, and you avoid the 500 error problem when the preview website get invalid draft data.

Using the Preview component is pretty straight forward. Just include it as a view in the structure builder setup. You can find several examples showing this in the Sanity Studio app in the repo. For instance, see: `apps/sanity-studio/deskStructure/siteBuilder/pages/homePage`

## Validating data from Sanity using Zod

All types in the common package are expressed using [Zod](https://zod.dev/) schemas. This means that we get the ability to validate data in addition to type the data.

### Why validate data from Sanity (and other sources)

Have you ever had a page you're working on start crashing with some `cannot read blah blah of undefined`? That's probably because the data you get isn't actually matching the type.

The way to solve this is first to not trust data from external sources, then you need to get some system in place to verify that the data you're getting is actually what you expect. This process is called validation, and it's quite common, but it's also rather time consuming. Zod makes this process easier, since creating types also creates validators.

At this point you should get familiar with Zod before reading on. The [basic usage](https://zod.dev/?id=basic-usage) section is a good place to start.

### How to validate a Sanity document.

:::admonition type="info"
Always run validation with Zod on the server side. It will block and can be a slow for huge sets of data, so again, run validation on the server.
:::

First, validation with Zod should be done on server. That means in a server component for Next.js projects and in `+page.server.ts` loader function for SvelteKit projects.

Both the SvelteKit and the Next.js projects in the repo has validation implemented for the home page.

It looks something like this for Next.js (see `apps/next-website-app-dir/app/page.tsx` for the full example):

```typescript
// In Next.js

// Your data loader function in a server component
async function getData(preview: boolean) {
	// Get data from Sanity
	const page = await getHomePageDocument(sanityConfigServer, preview);

	// Validate the data using the Zod schema
	// here we are using safeParse, which means that Zod will
	// return a result rather that throwing an error if the data is invalid
	const result = LandingPageBaseSchema.safeParse(page);
	if (!result.success) {
		// Handle the error in some way
		// This would be a good place to write an event to your logging service
		return null;
	}

	// ..and return it if valid
	return page;
}
```

In the SvelteKit example below we are using the `.parse()` method instead. This is fine since data is fetched inside a try/catch block:

```typescript
// +page.server.ts
export const load: PageServerLoad = async ({ locals }) => {
	const preview = locals.preview;

	try {
		// Fetch the data
		const homePageData = await getHomePageDocument(getSanityConfig(), preview);

		// Validate the data
		// This will throw an error if the data is invalid
		LandingPageBaseSchema.parse(homePageData);

		// return it
		return { homePageData };
	} catch (e) {
		// Good place to log the error
		error(404, {
			message: "Page not found",
		});
	}
};
```

If all types are expressed using Zod schemas, you can add validation wherever it's needed. This is why using Zod (or similar) is recommended for professional solutions.
