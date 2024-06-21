---
title: UI
---

## UI

This package contains UI components. These are used both in Storybook and by the website projects.

The idea here is to have UI components separate from the projects. This way the components can be used by multiple projects. The components can also be independently developed using only Storybook as a tool and then later adopted by the Next projects.

## How to use the components

There are two sets of UI components, React components and Svelte components.

:::admonition type="note"
The React components do depend on Next.
:::

Just import it from the ui package like so:

```typescript
// React
import { Alert, Button, Card } from "ui/react";

// Svelte
import { Alert, Button, Card } from "ui/svelte";
```
