Feature: Funcionalidad de inicio de sesion en Ghost
    @user1 @web
    Scenario: Usuario inicia sesion con credenciales invalidas
        # Given I navigate to page "http://localhost:2368/ghost/#/signin"
        # And I wait for 2 seconds
        # When I enter email "bc.castro@error.edu.co"
        # And I wait for 2 seconds
        # When I enter password "000000"
        # And I wait for 2 seconds
        # And I click on Sign in button
        # And I wait for 2 seconds
        # Then debería ver el mensaje de error "There is no user with that email address."
        # When Recargo la pagina
        # #Scenario: Usuario inicia sesion sin ingresar usuario
        # Given I navigate to page "http://localhost:2368/ghost/#/signin"
        # And I wait for 2 seconds
        # When I enter password "0123456789"
        # And I wait for 2 seconds
        # And I click on Sign in button
        # And I wait for 2 seconds
        # Then debería ver el mensaje de error "Please fill out the form to sign in."
        # When Recargo la pagina
        # #Scenario: Usuario inicia sesion sin ingresar contraseña
        # Given I navigate to page "http://localhost:2368/ghost/#/signin"
        # And I wait for 2 seconds
        # When I enter email "bc.castro@error.edu.co"
        # And I wait for 2 seconds
        # And I click on Sign in button
        # And I wait for 2 seconds
        # Then debería ver el mensaje de error "Please fill out the form to sign in."
        # When Recargo la pagina
        # #Scenario: Usuario inicia sesion sin ingresar usuario ni contraseña
        # Given I navigate to page "http://localhost:2368/ghost/#/signin"
        # And I wait for 2 seconds
        # And I click on Sign in button
        # And I wait for 2 seconds
        # Then debería ver el mensaje de error "Please fill out the form to sign in."
        # When Recargo la pagina
        #Scenario: Usuario inicia sesion con credenciales validas
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        And I wait for 2 seconds
        When I enter email "bc.castro@uniandes.edu.co"
        And I wait for 2 seconds
        When I enter password "0123456789"
        And I wait for 2 seconds
        And I click on Sign in button
        And I wait for 2 seconds
        Then la URL deberia ser "http://localhost:2368/ghost/#/dashboard"
        When Recargo la pagina
#Feature: Funcionalidad crear miembros del sitio
        # Scenario: Crear miembro del sitio con el usuario del administrador(add yourself)
        Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2368/ghost/#/members"
        And I wait for 2 seconds
        When el usuario da clic en el boton Add yourself as a member to test
        And I wait for 2 seconds
        Then el usuario ve una tabla con el usuario admin agregado "bc.castro@uniandes.edu.co"
        And I wait for 2 seconds
        When Recargo la pagina
        # Scenario: Crear miembro del sitio
        Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2368/ghost/#/members"
        And I wait for 2 seconds
        And el usuario da clic en el boton New Member
        And I wait for 2 seconds
        And el usuario digita name y mail
        And I wait for 2 seconds
        And el usuario da clic en el boton Save
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2368/ghost/#/members"
        And el usuario vuelve a la seccion de miembros del sitio
        And I wait for 2 seconds
        Then el usuario ve una tabla con el usuario agregado
        And I wait for 2 seconds
        When Recargo la pagina
# Scenario: Crear miembro del sitio con un usuario existente
        Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2368/ghost/#/members"
        And I wait for 2 seconds
        And el usuario da clic en el boton New Member
        And I wait for 2 seconds
        And el usuario digita name y mail
        And I wait for 2 seconds
        And el usuario da clic en el boton Save
        And I wait for 4 seconds
        When Recargo la pagina
# Scenario: Crear miembro del sitio con un mail invalido
        Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
        And el usuario da click en el boton Leave
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2368/ghost/#/members"
        And I wait for 2 seconds
        And el usuario da clic en el boton New Member
        And I wait for 2 seconds
        And el usuario digita name y mail invalido
        And I wait for 2 seconds
        And el usuario da clic en el boton Save
        And I wait for 2 seconds
        Then el usuario ve un error de mail invalido
        When Recargo la pagina
# Scenario: Cancelar la creacion de un miembro
        Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
        And I wait for 2 seconds
        When I navigate to page "http://localhost:2368/ghost/#/members"
        And I wait for 2 seconds
        And el usuario da clic en el boton New Member
        And I wait for 2 seconds
        And el usuario digita name y mail
        And I wait for 2 seconds
        And el usuario da click a la seccion de miembros del sitio
        Then el usuario da click en el boton Leave
