import { SanityConfigClient, SanityConfigServer } from "common/src/clients/config";

function logUndefinedEnv(missingVariable: string) {
	console.error(`Environment variable ${missingVariable} is not set!`);
	return "";
}

export const serverSideEnvironmentVariables = {
	// Sanity
	sanityApiToken: process.env.SANITY_SECRET_TOKEN ?? logUndefinedEnv("SANITY_SECRET_TOKEN"),
	sanityPreviewSecret: process.env.SANITY_PREVIEW_SECRET ?? logUndefinedEnv("SANITY_PREVIEW_SECRET"),
};

export const clientSideEnvironmentVariables = {
	// Sanity
	sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? logUndefinedEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
	sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? logUndefinedEnv("NEXT_PUBLIC_SANITY_DATASET"),
};

/**
 * For server-side requests, we need to provide a token
 */
export const sanityConfigServer: SanityConfigServer = {
	projectId: clientSideEnvironmentVariables.sanityProjectId,
	dataset: clientSideEnvironmentVariables.sanityDataset,
	token: serverSideEnvironmentVariables.sanityApiToken,
};

/**
 * For client-side only requests, we don't need to provide a token and should not expose it
 */
export const sanityConfigClient: SanityConfigClient = {
	projectId: clientSideEnvironmentVariables.sanityProjectId,
	dataset: clientSideEnvironmentVariables.sanityDataset,
};
