import { test, expect, chromium } from "@playwright/test";

test("Document Template creation", async ({ page }) => {
  await page.goto(
    "https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard"
  );
  
  await page.getByRole("link", { name: "Templates" }).click();
  
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
    .fill("writing test description\ndescription\n");
   

  await page.locator("//div[@class='content-section form-fields d-flex flex-column']").filter({hasText: "New Fields"}).click();
  await page.locator("body > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > process:nth-child(1) > div:nth-child(1) > process-edit:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > compact-container:nth-child(1) > div:nth-child(1) > div:nth-child(3) > compact-pane-left:nth-child(1) > compact-step-list:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > document-pane-editor:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)").filter({hasText:"Add"}).click();
  
  await page.getByPlaceholder("Title of text field").fill("test short text field");
  await page.locator("a").filter({ hasText: "USE DOCUMENT" }).click();
  await page.locator("a").filter({ hasText: "Continue" }).click();
  await page.getByPlaceholder("Type in a unique name for").fill("test launch");
  await page.locator("a").filter({ hasText: "Continue" }).click();
  await page.locator("a").filter({ hasText: "USE DOCUMENT" }).click();
});

test("Procedure Template creation", async ({ page }) => {

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
    .fill("final Test Automate Temp final");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Continue" }).click();

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
  await page.getByRole('button', { name: '15' }).click();
  await page.getByRole('row', { name: 'Test Job Title Edit Delete', exact: true }).getByRole('button').nth(1).click();
  
});