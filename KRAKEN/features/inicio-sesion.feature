
Feature: Funcionalidad de inicio de sesion en Ghost
    @user1 @web
    Scenario: Usuario inicia sesion con credenciales validas
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        When el usuario introduce un nombre de usuario y contrasena correctos
        Then el usuario hace clic en el boton de inicio de sesion
        Then el usuario deberia ser redirigido al dashboard principal de Ghost