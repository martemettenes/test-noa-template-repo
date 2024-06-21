import {
	hashString,
	stripLeadingAndTrailingSlashes,
	stripLeadingSlash,
	stripTrailingSlash,
} from "../../src/utils/stringUtils";

describe("utils:stringUtils", () => {
	describe("stripLeadingSlash", () => {
		test("should strip a leading slash", () => {
			expect(stripLeadingSlash("/test")).toBe("test");
		});
		test("should not strip a leading slash if there is none", () => {
			expect(stripLeadingSlash("test")).toBe("test");
		});
	});
	describe("stripTrailingSlash", () => {
		test("should strip a trailing slash", () => {
			expect(stripTrailingSlash("test/")).toBe("test");
		});
		test("should not strip a trailing slash if there is none", () => {
			expect(stripTrailingSlash("test")).toBe("test");
		});
	});
	describe("stripLeadingAndTrailingSlashes", () => {
		test("should strip a leading and trailing slash", () => {
			expect(stripLeadingAndTrailingSlashes("/test/")).toBe("test");
		});
		test("should not strip a leading and trailing slash if there is none", () => {
			expect(stripLeadingAndTrailingSlashes("test")).toBe("test");
		});
	});
	describe("hashString", () => {
		test("should hash a string", () => {
			expect(hashString("test")).toBe("1ef5209db8e1c9");
		});
		test("should hash a string with a seed", () => {
			expect(hashString("test", 123)).toBe("b0503e36220f4");
		});
	});
});
