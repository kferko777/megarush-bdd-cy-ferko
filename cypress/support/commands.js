///<reference types="cypress" />
import './commands'
require('cypress-iframe')
require('cypress-xpath')

import { Login_PO } from './page_objects/Login_PO'

const login_PO = new Login_PO ()

Cypress.Commands.add('loginData', function (
		username,
		password,
		invalidusername,
		invalidpassword,
		emptyusername,
		emptypassword
	) {
		login_PO.visit()
		login_PO.type_Username(username)
		login_PO.type_Password(password)
		login_PO.type_Username(invalidusername)
		login_PO.type_Password(invalidpassword)
		login_PO.type_Username(emptyusername)
		login_PO.type_Password(emptypassword)
	}
)

Cypress.Commands.add('isVisible', selector => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('clickAndOpenLink_InSameTab', selector => {
	cy.get(selector).invoke('removeAttr', 'target').click()
	cy.get(selector).click({ multiple: true })
})
