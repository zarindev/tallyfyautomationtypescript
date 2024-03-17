import { test, expect, chromium } from "@playwright/test";

 async function globalSetup() {   
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://account.tallyfy.com/login");

  await page.fill('input[type="email"]', "mdzarinjerry@gmail.com");

  await page.fill('input[type="password"]', "A@12345b");

  await page.click('button[type="submit"]');

  await expect(page).toHaveTitle(/Tallyfy/);

  await page.context().storageState({path: "./playwright/.auth/auth.json"})

};

export default globalSetup;