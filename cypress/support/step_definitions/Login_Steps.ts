///<reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Login_PO } from '../page_objects/Login_PO'
import * as LoginData from '../../fixtures/loginData.json'

const login_PO = new Login_PO()

Given('I click on Login button', () => {
	login_PO.visit()
})

//1.Positive scenario
When('I login with valid credentials', () => {
	login_PO.type_Username(LoginData.username)
	login_PO.type_Password(LoginData.password)
})

Given(`I click on Sign in button`, () => {
	login_PO.clickOn_SignIn_Button()
})

Then('I should be able to login successfully to the Website', () => {
	cy.url().should('include', 'casino')
})

//2.Negative scenario

When('I login with invalid username and valid password', () => {
	login_PO.type_Username(LoginData.invalidusername)
	login_PO.type_Password(LoginData.invalidpassword)
})

Then('Your username or password is incorrect text is displayed', () => {
	login_PO.clickOn_SignIn_Button()
	login_PO.expectErrorWrongCredentials()
})

//3.Negative Scenario: empty Credentials
When('I Login with empty credentials', () => {
	login_PO.type_Username(LoginData.emptyusername)
	login_PO.type_Password(LoginData.emptypassword)
})

Then('I should see Wrong login or password error message', () => {
	login_PO.errorInvalidUsername()
	login_PO.errorInvalidPassword()
})
