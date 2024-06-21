import { expect, test } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// We need the password value, so we need to load the .env file
dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") });

test.describe("Login functionality", () => {
	/**
	 * Tests that it's possible to login
	 * and that the write review component is visible after logging in
	 */
	test("testing successful login", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("link", { name: "Start Your Adventure" }).click();
		await page.getByRole("link", { name: "The Lord of the Rings" }).first().click();
		await page.getByRole("link", { name: "See all reviews" }).click();

		// We are now on the review page, remember the url
		const reviewPageUrl = page.url();

		await page.getByRole("link", { name: "Log in to write a review" }).click();
		await page.getByPlaceholder("must end in @noaignite.com").click();
		await page.getByPlaceholder("must end in @noaignite.com").fill("test@noaignite.com");
		await page.getByPlaceholder("*****").click();
		await page.getByPlaceholder("*****").fill(process.env.LOGIN_PASSWORD as string);
		await page.getByLabel("login button").click();

		// Test that the review input component is showing up
		await expect(page.getByRole("heading", { name: "Write a review" })).toBeVisible();
		// Test that we got redirected back to the correct review page
		expect(page.url()).toBe(reviewPageUrl);
	});

	/**
	 * Tests that it's not possible to login with an invalid password
	 * and that the error message is visible
	 */
	test("testing unsuccessful login", async ({ page }) => {
		await page.goto("/login");
		await page.getByPlaceholder("must end in @noaignite.com").click();
		await page.getByPlaceholder("must end in @noaignite.com").fill("test@noaignite.com");
		await page.getByPlaceholder("*****").click();
		await page.getByPlaceholder("*****").fill("wrongpassword");
		await page.getByLabel("login button").click();

		await expect(page.getByText("Invalid email or password")).toBeVisible();
	});
});
