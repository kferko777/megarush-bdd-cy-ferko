///<reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Login_PO } from '../page_objects/Login_PO'
import * as LoginData from '../../fixtures/loginData.json'

const loginPage = new Login_PO()

Given('I click on Login button', () => {
	loginPage.visit()
})

//Positive scenario
When('I login with valid credentials', () => {
	loginPage.type_Username(LoginData.username)
	loginPage.type_Password(LoginData.password)
})

Given(`I click on Sign in button`, () => {
	loginPage.clickOn_SignIn_Button()
})

Then('I should be able to login successfully to the Website', () => {
	cy.url().should('include', 'casino')
})

//Negative scenario

When('I login with invalid username and valid password', () => {
	loginPage.type_Username(LoginData.invalidusername)
	loginPage.type_Password(LoginData.invalidpassword)
})

Then('Your username or password is incorrect text is displayed', () => {
	loginPage.clickOn_SignIn_Button()
	loginPage.expectErrorWrongCredentials()
})

//3.Login Negative Scenario: empty Credentials
When('I Login with empty credentials', () => {
	loginPage.type_Username(LoginData.emptyusername)
	loginPage.type_Password(LoginData.emptypassword)
})

Then('I should see Wrong login or password error message', () => {
	loginPage.errorInvalidUsername()
	loginPage.errorInvalidPassword()
})
