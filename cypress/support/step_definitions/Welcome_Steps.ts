/// <reference types="cypress" />
import { Given } from '@badeball/cypress-cucumber-preprocessor'
import { Welcome_PO } from '../page_objects/Welcome_PO'

const welcome_PO = new Welcome_PO()

Given('I navigate to  megarush casino and accept cookies', () => {
    welcome_PO.visit()
	welcome_PO.acceptCookies()
})

Given('I click on Login in button', () => {
	welcome_PO.loginButton()
})
