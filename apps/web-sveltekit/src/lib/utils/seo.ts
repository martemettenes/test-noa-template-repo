export const config = {
	title: (pageTitle: string) => `${pageTitle} | SvelteKit demo site`,
	description: "This is a SvelteKit demo site used for testing SvelteKit for the NoA Ignite company",
	url: (path?: string) =>
		path
			? `https://noa-template-repo-sveltekit.vercel.app/${path.replace(/^\/+/g, "")}`
			: "https://noa-template-repo-sveltekit.vercel.app",
};

export function serializeSchema(data: unknown): string {
	return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}
