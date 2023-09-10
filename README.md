##project megarush-bdd

## 🚀 Install the project

Install project dependencies with: npm install

## 💻 Pre-requisites

1. Node JS 18+
2. VsCode should be installed
3. Git and Git bash should be installed
4. Github account should be created
5. Cypress version 12.14.0

## Cucumber setup:

-Add cypress/config.ts
-Add support for feature files to your Cypress configuration
-Add cosmiconfig in package.json

## Reports:

-npm install --save-dev mochawesome then should be installed in "package.json"
-npm install --save-dev mocha then should be installed in "package.json"
-npm install --save-dev mocha-allure-reporter allure-commandline then should be installed in "package.json"

## Allure Report:

-npm i -D @shelex/cypress-allure-plugin
-npm run cypress:execution-allure
-npm run allure:report
-allure open

## to run tests simply type --it will run all tests

-npm run ui-regression-headless-allure-electron or
-npm run daily-headless-chrome

## to run a simple test

-npx cypress open
-then run single test you want
