import { test, expect, chromium, Browser, Page } from '@playwright/test';
import {injectAxe, checkA11y} from 'axe-playwright';

let browser: Browser;
let page: Page;

test.describe('Tallyfy Accessibility Test', () => { 
    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        await page.goto(`https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard`);
        await injectAxe(page);
    });

    test("simple accessibility run", async () => {
        await checkA11y(page, {
            axeOptions: {
                runOnly: {
                    type: "tag",
                    values: [ "best-practice"]
                }
            },
            detailedReport: true,
            detailedReportOptions: {
                html: true,
            }
        });
    })
});