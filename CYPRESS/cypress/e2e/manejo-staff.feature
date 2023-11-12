@staff
Feature: Funcionalidad invitar staff al sitio con roles
    Scenario: Invitar staff al sitio sin digitar un email
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario hace clic en el boton de settings
        And el usuario es redirigido a la pagina de settings
        And el usuario hace clic en el boton de staff
        And el usuario hace clic en el boton de invite people
        And el usuario no ingresa correo del staff
        Then el usuario hace clic en el boton de send invitation
        Then el sistema muestra el mensaje de error "Please enter a valid email address."
    Scenario: Invitar staff al sitio con el Role Contributor
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario hace clic en el boton de settings
        And el usuario es redirigido a la pagina de settings
        And el usuario hace clic en el boton de staff
        And el usuario hace clic en el boton de invite people
        And el usuario ingresa correo del staff
        And el usuario selecciona el role Contributor
        Then el usuario hace clic en el boton de send invitation
    Scenario: Invitar staff al sitio con el Role Editor
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario hace clic en el boton de settings
        And el usuario es redirigido a la pagina de settings
        And el usuario hace clic en el boton de staff
        And el usuario hace clic en el boton de invite people
        And el usuario ingresa correo del staff
        And el usuario selecciona el role Editor
        Then el usuario hace clic en el boton de send invitation
    Scenario: Invitar staff al sitio con el Role Administrator
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario hace clic en el boton de settings
        And el usuario es redirigido a la pagina de settings
        And el usuario hace clic en el boton de staff
        And el usuario hace clic en el boton de invite people
        And el usuario ingresa correo del staff
        And el usuario selecciona el role Administrator
        Then el usuario hace clic en el boton de send invitation
    Scenario: Invitar staff al sitio con el Role Author
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario hace clic en el boton de settings
        And el usuario es redirigido a la pagina de settings
        And el usuario hace clic en el boton de staff
        And el usuario hace clic en el boton de invite people
        And el usuario ingresa correo del staff
        And el usuario selecciona el role Author
        Then el usuario hace clic en el boton de send invitation