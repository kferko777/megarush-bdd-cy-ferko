import "./commands";
import "cypress-cucumber-attach-screenshots-to-failed-steps";
import "cypress-real-events/support";
import "@shelex/cypress-allure-plugin";
import "cypress-mochawesome-reporter/register";


Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});