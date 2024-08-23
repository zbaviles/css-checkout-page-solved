# The Checkout Page

The CSS basic syntax assignment.

## Introduction

In this assignment, you will be fixing the CSS syntax issues of a modern checkout and payment page for the real-life e-commerce website.

Please review the image of the thrilling page in /assets/images/checkout-and-payment-page.png you will receive once all CSS problems are resolved.

To preview the app, simply click the "Go Live" button found in the VSCODE status bar. This will open your webpage in your browser.

If you are not using VSCode you can install and run the "live-server" npm package following the list of commands:

- [ ] Use npm i live-server to install the live-server package
- [ ] Use npm run live-server or npx live-server --port=5551 to run the live-server. The port number should be 5551 strictly.

The live-server installation video: [Video](https://www.loom.com/share/ca99ebec79d14bfa9fc4dd012661f919?sid=4ed63e9d-f8b8-4adf-bfc5-fff16d7f15cd)
The live-server NPM package page: [Link](https://www.npmjs.com/package/live-server)

## Learning objectives

This assignment should prove that a student is able to:

- Debug CSS files to fix common CSS syntax issues

## Standard requirements

- [ ] Download the zipped project file, and extract it
- [ ] Move the extracted folder into the project's storage and open the project in VSCode using the terminal
- [ ] Initialize playwright and install project packages
  - [ ] Use npm i to install packages
  - [ ] Use npm run browser-install to install the browser environment for testing (~131mb will be downloaded)
  - [ ] (Windows users only) Use npm run deps-install to install playwright additional dependencies (160mb will be downloaded)
- [ ] All the tasks of the "Specific requirements" section MUST be solved
- [ ] **The project's file/folder structure should NOT be edited!**
- [ ] All the tests MUST pass. Fix any errors before you submit (acceptance criteria).
  - [ ] Use `npm run test` to run all tests in the terminal
  - [ ] (Optional) Use `npm run test-ui` to run all the tests with GUI
  - [ ] (Optional) Use `npm run show-report` to see the latest report in the browser
- [ ] VSCode IDE MUST have 0 problems listed
- [ ] The code MUST be formatted with Prettier.
- [ ] Push the changes to the Github repo, when finished.
- [ ] Submit a .txt file with the Github repo url.

## Specific requirements

For the styles.css file:

- [ ] Find and fix all the syntax issues in the file
  - There are commented out hints for you to find the rCSS rules with incorrect syntax
  - When running tests, the failed test message contains the CSS file line number of the rule that was tested.

After all tests pass and the page matches the result mage 100%:

- [ ] Run the command `npm run prettier-check`. The output should have 0 errors (warnings are fine).
