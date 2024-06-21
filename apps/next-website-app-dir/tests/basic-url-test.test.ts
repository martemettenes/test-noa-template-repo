/**
 * Tests that the urls exists and is responding correctly
 */
import { expect, test } from "@playwright/test";

// The base url has been set in the config file
// see «playwright.config.ts»
const urls = ["/", "/articles", "/books"];

for (const url of urls) {
	test(`Testing url: «${url}»`, async ({ page }) => {
		// Visit the page
		const response = await page.goto(url);
		// Expect a 200 response
		expect(response?.ok).toBeTruthy();
	});
}
