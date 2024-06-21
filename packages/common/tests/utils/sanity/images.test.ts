import { clampDimensionsToNearestWidth, deviceWidths } from "../../../src/utils/sanity/images";

describe("utils:sanity", () => {
	describe("images", () => {
		describe("clampDimensionsToNearestWidth", () => {
			const dimensionsToTest = [
				{ input: { width: 400, height: 800 }, expected: { width: 384, height: 768 } },
				{ input: { width: 800, height: 400 }, expected: { width: 828, height: 414 } },
				{ input: { width: 1000, height: 1600 }, expected: { width: 1080, height: 1728 } },
				{ input: { width: 5000, height: 6600 }, expected: { width: 3840, height: 5069 } },
			];
			test("should return the nearest width and adjusted height", () => {
				dimensionsToTest.forEach((dimensions) => {
					const result = clampDimensionsToNearestWidth(dimensions.input, deviceWidths);
					expect(result).toEqual(dimensions.expected);
				});
			});
		});
	});
});
