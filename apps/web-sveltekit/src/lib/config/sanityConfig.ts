import { SANITY_SECRET_TOKEN, SANITY_MUTATION_TOKEN } from "$env/static/private";
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
import type { SanityConfigServer } from "common/src/clients/config";

/**
 * Returns the correct sanity config
 * @returns
 */
export function getSanityConfig(options?: { useMutationToken: boolean }): SanityConfigServer {
	return {
		projectId: PUBLIC_SANITY_PROJECT_ID,
		dataset: PUBLIC_SANITY_DATASET,
		token: options && options.useMutationToken ? SANITY_MUTATION_TOKEN : SANITY_SECRET_TOKEN,
	};
}
