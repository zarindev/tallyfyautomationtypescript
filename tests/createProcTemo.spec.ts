import { test, expect, chromium } from "@playwright/test";

test("Procedure Template creation", async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // sign in
  await page.goto("https://account.tallyfy.com/login");
  await page.pause();
  await page.getByPlaceholder("Your email").fill("mdzarinjerry@gmail.com");
  await page.getByPlaceholder("Password").fill("A@12345b");

  await page.getByRole("button", { name: "Sign in to Tallyfy" }).click();

  // navigate to templates
  await page.waitForSelector(
    "//span[@class='nav-text'][normalize-space()='Templates']"
  );
  await page.getByRole("link", { name: "Templates" }).click();

  // create procedure
  await page.waitForSelector(
    "//div[@class='process-filter-area process-filter justify-content-between']"
  );
  await page.locator("a").filter({ hasText: "Create" }).nth(1).click();
  await page.getByRole("link", { name: "Create Template Like a" }).click();
  await page
    .getByPlaceholder("Type in a unique name for")
    .fill("final Test Automate Temp final");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Continue" }).click();

  //creating steps

  await page.getByPlaceholder("Type in the step").click();
  await page.getByPlaceholder("Type in the step").fill("1st step");
  await page.getByRole("button", { name: "Create Step" }).click();

  await page.waitForSelector("text=Add Step");
  await page.getByPlaceholder("Type in the step").click();
  await page.getByPlaceholder("Type in the step").fill("2nd step");
  await page.getByRole("button", { name: "Add Step" }).click();

  await page.waitForSelector("text=Add Step");
  await page.getByPlaceholder("Type in the step").click();
  await page.getByPlaceholder("Type in the step").fill("3nd step");
  await page.getByRole("button", { name: "Add Step" }).click();

  await page.waitForSelector("text=Add Step");
  await page.getByPlaceholder("Type in the step").click();
  await page.getByPlaceholder("Type in the step").fill("4th step");
  await page.getByRole("button", { name: "Add Step" }).click();

  //Launching process

  await page.locator("a").filter({ hasText: "LAUNCH PROCESS" }).click();
  await page.getByPlaceholder("Type in a unique name for").click();
  await page.getByPlaceholder("Type in a unique name for").fill("Test launch");
  await page.locator("a").filter({ hasText: "Continue" }).click();
  await page.locator("a").filter({ hasText: "Launch" }).click();

  await context.close();
  await browser.close();
});
