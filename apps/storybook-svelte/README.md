# Storybook Svelte

This repository is intended as inspiration or a starter template to get rolling with Storybook using Svelte and Tailwind.

See the [documentation site](https://template-docs.vercel.app) for full docs.


## How it works

This is a fairly traditional storybook setup, but instead of writing stories in ts files we write them in svelte files using [storybook/addon-svelte-csf](https://github.com/storybookjs/addon-svelte-csf)

### Runnning storybook

```yarn storybook``` - runs storybook in dev mode

```yarn build-storybook``` - builds storybook for production

### Docs

To make docs work with this approach, we enable for all stories by default with the following in ```.storybook/main.ts```:

```js
const config: StorybookConfig = {
  ...
  docs: {
    autodocs: true,
  },
};
```

### Writing stories with @storybook/addon-svelte-csf

```svelte
<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';

  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

<Meta title="Button" component={Button}/>

<Template let:args>
  <Button {...args} on:click={handleClick}>
    You clicked: {count}
  </Button>
</Template>

<Story name="Rounded" args={{rounded: true}}/>

<Story name="Square" source args={{rounded: false}}/>

<!-- Dynamic snippet should be disabled for this story -->
<Story name="Button No Args">
  <Button>Label</Button>
</Story>

```