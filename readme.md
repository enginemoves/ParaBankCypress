# Cypress End-to-End Testing Project

## Project Overview

This Cypress project is designed to test various features of the Parabank application. The test suite includes functionalities like user registration, login, logout, transferring funds, and requesting loans. The project is structured to facilitate both feature-by-feature testing and comprehensive end-to-end testing.

## Base URL

The base URL for the application under test is:
```
https://parabank.parasoft.com/parabank/index.htm
```

## Spec Files

The project includes the following Cypress spec files:

- **login.cy.js**: Tests the login functionality.
- **logOut.cy.js**: Tests the logout functionality.
- **register.cy.js**: Tests the user registration process.
- **transferFunds.cy.js**: Tests the funds transfer feature.
- **requestLoans.cy.js**: Tests the loan request feature.

## Page Object Model (POM) Implementation

The project uses native Cypress fixtures to implement the Page Object Model (POM) for better code organization and maintenance. A fixture file is created for each spec file to manage the selectors and test data.

## Test Data Management

A dedicated test data file (`testData.js`) is created in the `fixtures` folder to store randomly generated data such as first names, last names, usernames, and email addresses. This data is imported and used in the `register.cy.js` spec file to ensure unique data for each test run.

**Note:** After creating users for a while, it was noticed that users would be deleted, rendering the credentials invalid. To address this, a function was added to the script that stores the newly created user credentials inside the `userCredentials.json` file in the fixture folder. This ensures that user login credentials are always valid and updated. For feature-based tests, it is recommended to run the `register` spec first. However, if you are running all specs, you need not worry, as the `register` spec will run first and update the user credentials.
The transferFunds select bank is also not a static value hence it was commented out and i used default values on the field to initiate transfer in the script

Allure Report folders were not added to the repo push because of its size but you can find a test report screenshot in the screenshot folder 

## All-in-One Spec File

To facilitate end-to-end testing, an additional spec file named `allinonespec.cy.js` is created in the `e2e` folder. This file imports all individual spec files to run them as a complete system test.

The `allinonespec.cy.js` file includes:
```javascript
import "../register.cy";
import "../login.cy";
import "../requestLoans.cy";
import "../transferFunds.cy";
import "../logOut.cy";
```

## Reusable Cypress Commands

Reusable Cypress commands are created and stored in the `support` folder to avoid duplication and streamline test code.

## Scripts

The following scripts are available in the `package.json` file:

- **`test`**: Runs all specs and generates an Allure report.
  ```json
  "test": "npm run allSpec && npm run allure:report"
  ```

- **`removeReport`**: Removes the `allure-report` and `allure-results` directories.
  ```json
  "removeReport": "rm -rf allure-report && rm -rf allure-results"
  ```

- **`allSpec`**: Runs all specs with a Chrome browser in headed mode and generates a report using `mocha-allure-reporter`.
  ```json
  "allSpec": "npm run removeReport && npx cypress run --browser=chrome --headed --spec cypress/e2e/AllSpecInOne/allSpecInOneTest.cy.js --reporter mocha-allure-reporter"
  ```

- **`allure:report`**: Generates and opens the Allure report from the results.
  ```json
  "allure:report": "allure generate allure-results --clean -o allure-report && allure open"
  ```

## Project Dependencies

- **Node.js**: Ensure you have Node.js installed to manage the project dependencies.
- **Cypress**: The testing framework used for writing and executing the test scripts.
- **Allure Command Line**: For generating and viewing test reports.
- **Mocha Allure Reporter**: For integrating Allure reporting with Mocha.



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/enginemoves/ParaBankCypress.git
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Tests

- To run individual spec files:
  ```bash
  npx cypress open
  ```
  Select the desired spec file from the Cypress Test Runner.

- To run the all-in-one spec file as a system test:
  ```bash
  npm run allSpec
  ```

- To clean up old report files and generate a new Allure report:
  ```bash
  npm run test
  ```

## Contribution

**Maintainer**: Armstrong Prince 