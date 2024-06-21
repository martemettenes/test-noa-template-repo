import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
import type { SanityConfigClient } from "common/src/clients/config";

/**
 * Returns the correct sanity config
 * @returns
 */
export function getSanityConfig(): SanityConfigClient {
	return {
		projectId: PUBLIC_SANITY_PROJECT_ID,
		dataset: PUBLIC_SANITY_DATASET,
	};
}
