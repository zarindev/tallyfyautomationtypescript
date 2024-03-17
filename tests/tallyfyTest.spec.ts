import { test, expect, chromium } from "@playwright/test";

test("Document Template creation", async ({ page }) => {
  await page.goto(
    "https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard"
  );
  await page.waitForSelector(
    "//span[@class='nav-text'][normalize-space()='Templates']"
  );
  await page.getByRole("link", { name: "Templates" }).click();
  await page.waitForSelector(
    "//div[@class='process-filter-area process-filter justify-content-between']"
  );
  await page.locator("a").filter({ hasText: "Create" }).nth(1).click();
  await page.getByRole("link", { name: "Create Template Like a" }).click();
  await page
    .getByPlaceholder("Type in a unique name for")
    .fill("document automation");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByLabel("DOCUMENT A template for a").check();
  await page.getByRole("button", { name: "Continue" }).click();

  await page
    .locator("div")
    .filter({ hasText: /^Add description \(optional\)Show HTML$/ })
    .locator("div")
    .first()
    .fill("writing test description\ndescription");
  await page.getByRole("button", { name: "New Fields  A form field" }).click();
  await page.getByText("Add").nth(1).click();
  await page.getByPlaceholder("Title of text field").fill("test field");
  await page.locator("a").filter({ hasText: "USE DOCUMENT" }).click();
  await page.locator("a").filter({ hasText: "Continue" }).click();
  await page.getByPlaceholder("Type in a unique name for").fill("test launch");
  await page.locator("a").filter({ hasText: "Continue" }).click();
  await page.locator("a").filter({ hasText: "USE DOCUMENT" }).click();
});

test("Procedure Template creation", async ({ page }) => {
  // navigate to templates
  await page.goto(
    "https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard"
  );
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
});

test("Job Title Creation", async ({ page }) => {
  // navigate to job title option
  await page.goto(
    "https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard"
  );
  await page.getByRole("link", { name: " Settings" }).click();
  await page.getByRole("link", { name: "Job Titles" }).click();
  await page.locator("a").filter({ hasText: "Create new job title" }).click();
  await page.getByPlaceholder("Enter Job Title").click();
  await page.getByPlaceholder("Enter Job Title").fill("Test Job Title ");
  await page.getByRole("button", { name: "Save" }).click();
});
