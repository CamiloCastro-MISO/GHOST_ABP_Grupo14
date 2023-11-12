@staff
Feature: Funcionalidad crear miembros del sitio
    Scenario: Crear miembro del sitio con el usuario del administrador(add yourself)
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario se dirige a la seccion members del sitio 
        And el usuario da clic en el boton Add yourself as a member to test
        Then el usuario ve una tabla con el usuario admin agregado
    Scenario: Crear miembro del sitio
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario se dirige a la seccion members del sitio
        And el usuario da clic en el boton New Member
        And el usario digita name y mail
        And el usuario da clic en el boton Save
        And el usuario vuelve a la seccion de miembros del sitio
        Then el usuario ve una tabla con el usuario agregado
    Scenario: Crear miembro del sitio con un usuario existente
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario se dirige a la seccion members del sitio
        And el usuario da clic en el boton New Member
        And el usario digita name y mail
        And el usuario da clic en el boton Save
        Then el usuario ve un error de usuario existente
    Scenario: Crear miembro del sitio con un mail invalido
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario se dirige a la seccion members del sitio
        And el usuario da clic en el boton New Member
        And el usario digita name y mail invalido
        And el usuario da clic en el boton Save
        Then el usuario ve un error de mail invalido
    Scenario: Cancelar la creacion de un miembro
        Given Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost
        When el usuario se dirige a la seccion members del sitio
        And el usuario da clic en el boton New Member
        And el usario digita name y mail
        And el usuario da click a la seccion de miembros del sitio
        Then el usuario da click en el boton Leave