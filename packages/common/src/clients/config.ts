interface SanityConfig {
	projectId: string;
	dataset: string;
	useCdn?: boolean;
	apiVersion?: string;
}

/**
 * The config for the Sanity client when used on the client side
 * The token is not needed and should never be used on the client side
 */
export interface SanityConfigClient extends SanityConfig {
	token?: never;
}

/**
 * The config for the Sanity client when used on the server side
 */
export interface SanityConfigServer extends SanityConfig {
	token: string;
}
