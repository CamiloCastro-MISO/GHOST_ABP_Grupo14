
Feature: Funcionalidad de inicio de sesion en Ghost
    @user1 @web
    Scenario: Usuario inicia sesion con credenciales invalidas
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 1 seconds
        When I enter email "bc.castro@error.edu.co"
        And I wait for 1 seconds
        When I enter password "000000"
        And I wait for 1 seconds
        And I click on Sign in button
        And I wait for 1 seconds
        Then debería ver el mensaje de error "Too many login attempts."
    @user2 @web
    Scenario: Usuario inicia sesion sin ingresar usuario
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 1 seconds
        When I enter password "0123456789"
        And I wait for 1 seconds
        And I click on Sign in button
        And I wait for 1 seconds
        Then debería ver el mensaje de error "Please fill out the form to sign in."
    @user3 @web
    Scenario: Usuario inicia sesion sin ingresar contraseña
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 1 seconds
        When I enter email "bc.castro@error.edu.co"
        And I wait for 1 seconds
        And I click on Sign in button
        And I wait for 1 seconds
        Then debería ver el mensaje de error "Please fill out the form to sign in."
    @user4 @web
    Scenario: Usuario inicia sesion sin ingresar usuario ni contraseña
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 1 seconds
        And I click on Sign in button
        And I wait for 1 seconds
        Then debería ver el mensaje de error "Please fill out the form to sign in."
    # @user5 @web
    # Scenario: Usuario inicia sesion con credenciales validas
    #     Given I navigate to page "http://localhost:2368/ghost/#/signin"
    #     And I wait for 1 seconds
    #     When I enter email "bc.castro@uniandes.edu.co"
    #     And I wait for 1 seconds
    #     When I enter password "0123456789"
    #     And I wait for 1 seconds
    #     And I click on Sign in button
    #     And I wait for 1 seconds
    #     Then la URL deberia ser "http://localhost:2368/ghost/#/dashboard"
