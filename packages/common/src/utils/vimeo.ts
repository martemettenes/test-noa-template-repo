/**
 * Parse a Vimeo URL and return the video ID
 */
export function getVimeoIdFromUrl(vimeoUrl: string): string {
	const regEx = new RegExp(/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/i);
	const parsed = vimeoUrl.match(regEx);
	if (Array.isArray(parsed)) {
		return parsed[5];
	}
	return "";
}
