
Feature: Sign in

    Background: Navigate to https://www.megarush.com/en
        Given I navigate to  megarush casino and accept cookies
        When I click on Login in button

    Scenario: Positive scenario
        Given I login with valid credentials
        And I click on Sign in button
        Then I should be able to login successfully to the Website

    Scenario: Negative Login: Input invalid username and valid password
        When I login with invalid username and valid password
        And I click on Sign in button
        Then Your username or password is incorrect text is displayed

    
    Scenario: Login with empty credentials Application Service
        When I Login with empty credentials
        And I click on Sign in button
        Then I should see Wrong login or password error message
