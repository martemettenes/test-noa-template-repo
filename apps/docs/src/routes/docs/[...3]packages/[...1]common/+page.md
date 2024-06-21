---
title: Common
---

## Common

This is a common library for utils used by multiple apps

There are no default exports and no build step.
To import a module point to the src folder:

```typescript
import { getBaseUrl } from "common/src/utils/url";
```

## Content

-   `clients` - All clients used to fetch data
-   `content` - Functions and queries for all content (in this repo it's only Sanity content, but other content should go in here as well)
-   `sanity` - Sanity config
-   `types` - All Typescript types (as Zod schemas) matching data from Sanity (and possibly other sources)
-   `utils` - Shared utils

### Writing types using Zod

All types in the types folder are expressed using Zod schemas and inferring the exported types. This means that you not only get types for all Sanity data, but at the same time you gain the ability to validate the data from Sanity. [Read more about validating data in the validation section.](/docs/other/validation)
