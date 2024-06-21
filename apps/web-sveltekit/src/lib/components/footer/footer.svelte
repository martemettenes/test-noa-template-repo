<script lang="ts">
	import type { Footer } from "common/src/types/sanity/allPages/footer";

	export let footerData: Footer;
</script>

<footer class="footer flex w-full flex-col items-center bg-base-200 p-10 text-base-content">
	<div class="flex flex-col items-center">
		<span class="footer-title">Links</span>
		{#each footerData.footerLinks as link}
			{#if link.footerLink.startsWith("http")}
				<div class="flex gap-1">
					<a href={link.footerLink} target="_blank" rel="noreferrer">
						{link.footerLinkTitle} ↗
					</a>
				</div>
			{:else}
				<div class="flex gap-1">
					<a href={link.footerLink} class="link-hover link">
						{link.footerLinkTitle}
					</a>
				</div>
			{/if}
		{/each}
	</div>
	<div class="grid grid-flow-col gap-4">
		<p>{footerData.footerText}</p>
	</div>
</footer>
