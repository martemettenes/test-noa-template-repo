/**
 * Tests that the main menu and footer have content and
 * that clicking a link in the main menu navigates correctly
 */
import { expect, test } from "@playwright/test";

test.describe("Main menu", () => {
	test("Testing for a correct main menu setup", async ({ page }) => {
		// Visit the page
		await page.goto("/");
		await expect(page).toHaveURL("/");
		await expect(page).toHaveTitle("Bookstore");
		await expect(page.getByRole("navigation").getByRole("link", { name: "Books", exact: true })).toBeVisible();
	});
	test("Clicking the articles link should navigate to /articles", async ({ page }) => {
		// Go to the home page
		await page.goto("/");
		// Click the articles link in the main menu
		const articleLink = page.getByRole("navigation").getByRole("link", { name: "Articles" });
		await articleLink.click();
		// The url should now be /articles
		await expect(page).toHaveURL("/articles");
	});
});
