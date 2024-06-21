/**
 * A function that compares two arrays of strings and returns true if they are equal
 * PS: It does not matter if the order of the elements is different
 */
export function arraysEqual(a: Array<string>, b: Array<string>): boolean {
	if (a === void 0) {
		a = [];
	}
	if (b === void 0) {
		b = [];
	}
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;

	const cpA = [...a];
	const cpB = [...b];
	cpA.sort();
	cpB.sort();

	for (let i = 0; i < cpA.length; ++i) {
		if (cpA[i] !== cpB[i]) return false;
	}
	return true;
}
