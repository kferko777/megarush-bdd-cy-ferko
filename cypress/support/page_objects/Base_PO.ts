/// <reference types="cypress" />

export class Base_PO {
	acceptCookies() {
		cy.get('[id*="layout-app"]').contains('OK').click({ force: true })
	}

	loginButton() {
		cy.get('.buttons > magic-ui-button:nth-of-type(2)').click({ force: true })
	}
}
