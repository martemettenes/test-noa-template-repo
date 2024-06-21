import { cn } from "../../src/utils/cn";

describe("utils:cn", () => {
	test("should return the correct classnames", () => {
		expect(cn("test", "test2")).toBe("test test2");
	});
	test("should return the correct classnames with an object", () => {
		expect(cn({ test: true, test2: false })).toBe("test");
	});
	test("should return the correct classnames with an array and an object", () => {
		expect(cn(["test", "test2"], { test3: true })).toBe("test test2 test3");
	});
	test("should return the correct classnames with an array and an object", () => {
		expect(cn(["test", "test2"], { test3: false })).toBe("test test2");
	});
});
