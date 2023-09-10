import './commands'
require('cypress-iframe')
require('cypress-xpath')
import * as LoginData from '../fixtures/loginData'

Cypress.Commands.add(
	'loginData',
	function (
		username,
		password,
		invalidusername,
		invalidpassword,
		emptyusername,
		emptypassword
	) {
		loginPage.visit()
		loginPage.fillUsername(username)
		loginPage.fillPassword(password)
		loginPage.fillUsername(invalidusername)
		loginPage.fillPassword(invalidpassword)
		loginPage.fillUsername(emptyusername)
		loginPage.fillPassword(emptypassword)
	}
)

Cypress.Commands.add('isVisible', selector => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('clickAndOpenLink_InSameTab', selector => {
	cy.get(selector).invoke('removeAttr', 'target').click()
	cy.get(selector).click({ multiple: true })
})
