/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly SANITY_STUDIO_PREVIEW_TOKEN: string;
	readonly SANITY_STUDIO_NEXT_SITE_URL: string;
	readonly SANITY_STUDIO_API_PROJECT_ID: string;
	readonly SANITY_STUDIO_PROJECT_NAME: string;
	readonly SANITY_STUDIO_API_DATASET: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
