/**
 * Returns a valid Sanity _id
 * Removes any drafts prefix
 */
export function sanitizeId(id: string): string {
	return id.replace("drafts.", "");
}
