import { test, expect, chromium } from "@playwright/test";

test("Login Setup", async({page}) => {

  await page.goto("https://account.tallyfy.com/login");

  await page.fill('input[type="email"]', "mdzarinjerry@gmail.com");

  await page.fill('input[type="password"]', "A@12345b");

  await page.click('button[type="submit"]');

  await page.waitForURL("https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard");

  await expect(page).toHaveTitle(/Tallyfy/);

  await page.context().storageState({path: "./playwright/.auth/auth.json"})

})