import { test, expect, chromium } from "@playwright/test";

test("Document Template creation", async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // sign in
  
  await page.goto("https://account.tallyfy.com/login");

  await page.fill('input[type="email"]', "mdzarinjerry@gmail.com");

  await page.fill('input[type="password"]', "A@12345b");

  await page.click('button[type="submit"]');

  // navigate to job title option
  await page.getByRole('link', { name: ' Settings' }).click();
  await page.getByRole('link', { name: 'Job Titles' }).click();
  await page.locator('a').filter({ hasText: 'Create new job title' }).click();
  await page.getByPlaceholder('Enter Job Title').click();
  await page.getByPlaceholder('Enter Job Title').fill('Test Job Title ');
  await page.getByRole('button', { name: 'Save' }).click();

//close
  await context.close();
  await browser.close();
});