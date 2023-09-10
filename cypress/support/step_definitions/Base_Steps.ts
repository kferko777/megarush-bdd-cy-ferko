/// <reference types="cypress" />
import {
    When,
    Then,
    Before,
    After,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Before(() => {
    cy.log("Executes before each Scenario/Test.");
    cy.clearLocalStorage();
    cy.clearCookies();
  });
  
  Before({ tags: "@regression" }, () => {
    cy.log("Executes Smoke Pack");
  });
  
  After(() => {
    cy.log("Executes after each Scenario/Test.");
  });
  
  When("I wait for {int} seconds", (seconds) => {
    cy.wait(5000);
  });