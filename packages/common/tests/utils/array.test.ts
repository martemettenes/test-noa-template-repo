import { arraysEqual } from "../../src/utils/array";

describe("utils:array", () => {
	describe("arraysEqual", () => {
		test("returns true if arrays are equal", () => {
			expect(arraysEqual(["a", "b", "c"], ["a", "b", "c"])).toBe(true);
		});
		test("returns true if arrays are equal", () => {
			expect(arraysEqual(["a", "c", "b"], ["a", "b", "c"])).toBe(true);
		});
		test("returns false if arrays are not equal", () => {
			expect(arraysEqual(["a", "b", "c"], ["a", "b", "d"])).toBe(false);
		});
	});
});
