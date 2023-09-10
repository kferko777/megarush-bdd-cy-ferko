/// <reference types="cypress" />
import * as CONFIG from '../../../cypress.config'
import { Base_PO } from './Base_PO'

export class Login_PO {
	visit() {
		cy.visit(Cypress.env('url'))
	}

  clickOn_SignIn_Button() {
		const button = cy.get("button[type='submit']")
    button.click({ force: true })
	}

	type_Username(value) {
		const field = cy.get('#email').click({ force: true })
		field.clear()
		field.type(value)
		return this
	}

	type_Password(value) {
		const field = cy.get("input[name='password']").click({ force: true })
		field.clear()
		field.type(value)
		return this
	}

	expectErrorWrongCredentials() {
		cy.get('div#app form > magic-ui-text').should('be.visible', {
			timeout: 10000,
		})
	}

	errorInvalidUsername() {
		cy.get("magic-ui-text[content='Enter a valid email address']").should(
			'be.visible',
			{
				timeout: 10000,
			}
		)
	}

	errorInvalidPassword() {
		cy.get(
			"div[class='form-field has-error has-no-icon'] div[class='message']"
		).should('be.visible', {
			timeout: 10000,
		})
	}

  
}
