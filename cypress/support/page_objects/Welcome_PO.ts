/// <reference types="cypress" />

import { Base_PO } from './Base_PO'

export class Welcome_PO extends Base_PO {
	visit() {
		cy.visit(Cypress.env('url'))
	}
}
