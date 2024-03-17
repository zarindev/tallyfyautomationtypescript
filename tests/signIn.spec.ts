import { test, expect, chromium } from "@playwright/test";

test("Sign In", async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await page.goto("https://account.tallyfy.com/login");

  await page.fill('input[type="email"]', "mdzarinjerry@gmail.com");

  await page.fill('input[type="password"]', "A@12345b");

  await page.click('button[type="submit"]');

  await context.close();
  await browser.close();
});
