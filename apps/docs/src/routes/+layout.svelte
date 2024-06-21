<script>
	// https://kit-docs.svelteness.dev
	import "@svelteness/kit-docs/client/polyfills/index.js";
	import "@svelteness/kit-docs/client/styles/normalize.css";
	import "@svelteness/kit-docs/client/styles/fonts.css";
	import "@svelteness/kit-docs/client/styles/theme.css";
	import "@svelteness/kit-docs/client/styles/vars.css";

	import { page } from "$app/stores";
	import ManTyping from "$img/man-typing.png";
	import { SocialLink } from "@svelteness/kit-docs";

	import { Button, KitDocs, KitDocsLayout, createSidebarContext } from "@svelteness/kit-docs";

	/** @type {import('./$types').LayoutData} */
	export let data;

	$: ({ meta, sidebar } = data);

	/** @type {import('@svelteness/kit-docs').NavbarConfig} */
	const navbar = {
		links: [
			{
				title: "Releases",
				slug: "https://github.com/thenorthalliance/template-repo/blob/main/releases.md",
			},
		],
	};

	const { activeCategory } = createSidebarContext(sidebar);

	$: category = $activeCategory ? `${$activeCategory}: ` : "";
	$: title = meta ? `${category}${meta.title} | Template Docs` : null;
	$: description = meta?.description;
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar}>
		<div class="logo" slot="navbar-left">
			<Button href="/">
				<div class="logo-wrapper">
					<img src={ManTyping} width="40" alt="Logo" />
					<span style="padding-top: 10px; text-transform: uppercase;">NOA Ignite Template Repo</span>
				</div>
			</Button>
		</div>
		<div slot="navbar-right-alt">
			<SocialLink type="gitHub" href="https://github.com/thenorthalliance/template-repo" />
		</div>

		<slot />
	</KitDocsLayout>
</KitDocs>

<style>
	:global(:root) {
		--kd-color-brand-rgb: 233, 127, 6;
	}

	:global(:root.dark) {
		--kd-color-brand-rgb: 213, 149, 76;
	}

	.logo :global(a) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo :global(svg) {
		height: 36px;
		overflow: hidden;
	}
	.logo-wrapper {
		display: flex;
		gap: 10px;
	}
	.logo-wrapper span {
		display: flex;
		align-items: center;
	}
</style>
