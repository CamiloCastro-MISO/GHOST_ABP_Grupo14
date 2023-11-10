@login
Feature: Funcionalidad de inicio de sesion en Ghost
    @loginExitoso
    Scenario: Usuario inicia sesion con credenciales validas
        Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost
        When el usuario introduce un nombre de usuario y contrasena correctos
        And el usuario hace clic en el boton de inicio de sesion
        Then el usuario deberia ser redirigido al dashboard principal de Ghost