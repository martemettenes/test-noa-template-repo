import { stripLeadingAndTrailingSlashes, stripLeadingSlash, stripTrailingSlash } from "../src/utils/stringUtils";
import { getFullUrlFromDomain } from "../src/utils/url";

describe("stringUtils", () => {
	const testPath = "/test/hest/";

	describe("stripLeadingSlash()", () => {
		test("should strip a leading slash", () => {
			expect(stripLeadingSlash(testPath)).toBe("test/hest/");
		});
	});

	describe("stripTrailingSlash()", () => {
		test("should strip a trailing slash", () => {
			expect(stripTrailingSlash(testPath)).toBe("/test/hest");
		});
	});
	describe("stripLeadingAndTrailingSlashes()", () => {
		test("should strip leading and trailing slashes", () => {
			expect(stripLeadingAndTrailingSlashes(testPath)).toBe("test/hest");
		});
	});
});

describe("urlUtils", () => {
	describe("getFullUrlFromDomain()", () => {
		test("should return a http localhost url", () => {
			expect(getFullUrlFromDomain("localhost:3000/a/path")).toBe("http://localhost:3000/a/path");
		});
		test("should return a https remote host url", () => {
			expect(getFullUrlFromDomain("vg.no/articles/blah")).toBe("https://vg.no/articles/blah");
		});
	});
});
