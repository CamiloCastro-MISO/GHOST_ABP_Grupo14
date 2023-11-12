@login
Feature: Funcionalidad de inicio de sesion en Ghost
    @loginFallido1
    Scenario: Usuario inicia sesion con usuario y contrasena incorrectas
        Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost
        When el usuario introduce un nombre de usuario y contrasena incorrectos
        And el usuario hace clic en el boton de inicio de sesion
        Then el usuario deberia recibir el mensaje de error    
    
    @loginFallido2
    Scenario: Usuario inicia sesion solo con usuario
        Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost
        When el usuario introduce solamente un nombre de usuario correcto
        And el usuario hace clic en el boton de inicio de sesion
        Then el usuario deberia recibir el mensaje de error     

    @loginFallido3
    Scenario: Usuario inicia sesion solo con contrasena
        Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost
        When el usuario introduce solamente una contrasena correcta
        And el usuario hace clic en el boton de inicio de sesion
        Then el usuario deberia recibir el mensaje de error 

    @loginFallido4
    Scenario: Usuario inicia sesion sin credenciales
        Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost
        When el usuario no introduce nombre de usuario ni contrasena
        And el usuario hace clic en el boton de inicio de sesion
        Then el usuario deberia recibir el mensaje de error         

    @loginExitoso
    Scenario: Usuario inicia sesion con credenciales validas
        Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost
        When el usuario introduce un nombre de usuario y contrasena correctos
        And el usuario hace clic en el boton de inicio de sesion
        Then el usuario deberia ser redirigido al dashboard principal de Ghost