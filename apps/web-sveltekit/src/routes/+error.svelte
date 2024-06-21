<script lang="ts">
	import { page } from "$app/stores";
</script>

{#if $page.status === 404}
	<h1>Page not found</h1>
	<pre>{$page.error?.message}</pre>
	<a href="/">Go to the home page</a>
{:else}
	<h1>An error occured</h1>
	<p>Status: {$page.status}</p>
	<pre>{$page.error?.message || "Unknown error"}</pre>
	<a href="/">Go to the home page</a>
{/if}
