# Tallyfy Automation

## Cloning Playwright_Tallyfy from Github
Run this on your desktop terminal in a specific folder where you want this test file to store `git clone https://github.com/zarindev/playwright_tallyfy.git`

## Making it ready for running
- Open the cloned folder in `VS Code`
- Open `VS Code Terminal`
- Run `npm init playwright@latest`
- Skip overriding files by pressing `N` when there is any command needed in the terminal
- All the packages will be installed and you will be ready to run the test now

## Running Tests
The `tests` folder contains the test files. The files with `.spec.ts` are the test files containing tests written inside them. 

You can run all the tests together by running `npx playwright test` in the `VS Code Terminal`. By doing this, all the tests will run together simultaneously. 

You can run specific test file tests by including the file name in the command. For example, you want to run `tallyfyTest.spec.ts` file for a test. Run `npx playwright test tallyfyTest.spec.ts` in the `VS Code Terminal`.

By the above methods, the tests will be run in chromium, firefox, and webkit browsers at the same time. But you can choose a specific browser to run a test. 
Run `npx playwright test --project=chromium` to run the tests in chromium browser.
Run `npx playwright test --project=firefox` to run the tests in firefox browser.
Run `npx playwright test --project=webkit` to run the tests in webkit browser.

If you want to run a specific test file in a specific browser, run `npx playwright test tallyfyTest.spec.ts --project=chromium`.






