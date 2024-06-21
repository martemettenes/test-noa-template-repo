import { getBaseUrl, getFullUrlFromDomain } from "../../src/utils/url";

describe("utils:url", () => {
	describe("getBaseUrl", () => {
		test("should return the correct url for localhost", () => {
			expect(getBaseUrl()).toBe("http://localhost:3000");
		});
		test("should return the correct url for Vercel", () => {
			process.env.VERCEL_URL = "my-domain.com";
			expect(getBaseUrl()).toBe("https://my-domain.com");
		});
	});
	describe("getFullUrlFromDomain", () => {
		test("should return the correct url for localhost", () => {
			expect(getFullUrlFromDomain("localhost:3000")).toBe("http://localhost:3000");
		});
		test("should return the correct url for Vercel", () => {
			expect(getFullUrlFromDomain("my-domain.com")).toBe("https://my-domain.com");
		});
	});
});
