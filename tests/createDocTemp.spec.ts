import { test, expect, chromium } from "@playwright/test";

test("Document Template creation", async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // sign in
  await page.goto("https://account.tallyfy.com/login");

  await page.pause();
  await page.fill('input[type="email"]', "mdzarinjerry@gmail.com");

  await page.fill('input[type="password"]', "A@12345b");

  await page.click('button[type="submit"]');

  // navigate to templates
  await page.waitForSelector(
    "//span[@class='nav-text'][normalize-space()='Templates']"
  );
  await page.getByRole("link", { name: "Templates" }).click();
  await page.waitForSelector(
    "//div[@class='process-filter-area process-filter justify-content-between']"
  );
  await page.locator("a").filter({ hasText: "Create" }).nth(1).click();
  await page.getByRole("link", { name: "Create Template Like a" }).click();
  await page.getByPlaceholder('Type in a unique name for').fill('document automation');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('DOCUMENT A template for a').check();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.locator('div').filter({ hasText: /^Add description \(optional\)Show HTML$/ }).locator('div').first().fill('writing test description\ndescription');
  await page.getByRole('button', { name: 'New Fields  A form field' }).click();
  await page.getByText('Add').nth(1).click();
  await page.getByPlaceholder('Title of text field').fill('test field');
  await page.locator('a').filter({ hasText: 'USE DOCUMENT' }).click();
  await page.locator('a').filter({ hasText: 'Continue' }).click();
  await page.getByPlaceholder('Type in a unique name for').fill('test launch');
  await page.locator('a').filter({ hasText: 'Continue' }).click();
  await page.locator('a').filter({ hasText: 'USE DOCUMENT' }).click();

  await context.close();
  await browser.close();
});
