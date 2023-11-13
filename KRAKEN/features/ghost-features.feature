Feature: Funcionalidad de inicio de sesion en Ghost
        @user1 @web
        Scenario: Usuario inicia sesion con credenciales invalidas
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I wait for 2 seconds
                When I enter email "bc.castro@error.edu.co"
                And I wait for 2 seconds
                When I enter password "000000"
                And I wait for 2 seconds
                And I click on Sign in button
                And I wait for 2 seconds
                Then debería ver el mensaje de error "There is no user with that email address."
                When Recargo la pagina
                #Scenario: Usuario inicia sesion sin ingresar usuario
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I wait for 2 seconds
                When I enter password "0123456789"
                And I wait for 2 seconds
                And I click on Sign in button
                And I wait for 2 seconds
                Then debería ver el mensaje de error "Please fill out the form to sign in."
                When Recargo la pagina
                #Scenario: Usuario inicia sesion sin ingresar contraseña
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I wait for 2 seconds
                When I enter email "bc.castro@error.edu.co"
                And I wait for 2 seconds
                And I click on Sign in button
                And I wait for 2 seconds
                Then debería ver el mensaje de error "Please fill out the form to sign in."
                When Recargo la pagina
                #Scenario: Usuario inicia sesion sin ingresar usuario ni contraseña
                Given I navigate to page "http://localhost:2368/ghost/#/signin"
                And I wait for 2 seconds
                And I click on Sign in button
                And I wait for 2 seconds
                Then debería ver el mensaje de error "Please fill out the form to sign in."
                When Recargo la pagina
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
                Then el usuario ve un error de mail invalido "Invalid Email"
                When Recargo la pagina
                # Scenario: Cancelar la creacion de un miembro
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And el usuario da click en el boton Leave
                And I wait for 2 seconds
                When I navigate to page "http://localhost:2368/ghost/#/members"
                And I wait for 2 seconds
                And el usuario da clic en el boton New Member
                And I wait for 2 seconds
                And el usuario digita name y mail
                And I wait for 2 seconds
                And el usuario da click a la seccion de miembros del sitio
                And I wait for 2 seconds
                Then el usuario da click en el boton Leave
                And I wait for 2 seconds
                When Recargo la pagina
                # Feature: Funcionalidad de crear una pagina
                #         Scenario: El usuario crea una pagina
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item pages
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Page
                And I wait for 2 seconds
                And el usuario escribe en los campos Titulo y Contenido
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Publicar
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Continuar
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Publicar Ahora
                And I wait for 2 seconds
                Then el usuario deberia ver la pagina como publicada
                And I wait for 2 seconds
                #Scenario: Usuario visita el listar paginas en el admin de Ghost
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item pages
                And I wait for 2 seconds
                Given I navigate to page "http://localhost:2368/ghost/#/pages"
                And I wait for 2 seconds
                Then el usuario deberia ser redirigido a la lista de las paginas
                And I wait for 2 seconds
                When Recargo la pagina
                #Scenario: El usuario se dirige al formulario de crear pagina
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item pages
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Page
                And I wait for 2 seconds
                Then el usuario deberia ser redirigido al formulario crear pagina
                And I wait for 2 seconds
                #Scenario: El usuario despliega la configuracion de una pagina
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item pages
                And I wait for 2 seconds
                When el usuario hace click sobre el item pages
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Page
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Settings
                And I wait for 2 seconds
                Then el usuario deberia ver el menu de configuracion
                And I wait for 5 seconds
                #Scenario: El usuario ve el preview de una pagina antes de publicarla
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item pages
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Page
                And I wait for 2 seconds
                And el usuario escribe en los campos Titulo y Contenido
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Preview
                And I wait for 2 seconds
                Then el usuario deberia ver la previsualizacion de la pagina
                And I wait for 2 seconds
                # Feature: Funcionalidad de crear un post
                #         Scenario: El usuario crea un post
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item Posts
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Post
                And I wait for 2 seconds
                And el usuario escribe en los campos Titulo y Contenido
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Publicar
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Continuar
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Publicar Ahora
                And I wait for 2 seconds
                # Scenario: El usuario crea un post con el icono de nuevo post
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 4 seconds
                When Recargo la pagina
                When el usuario hace click sobre el icono post
                And I wait for 2 seconds
                And el usuario escribe en los campos Titulo y Contenido
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Publicar
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Continuar
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Publicar Ahora
                And I wait for 2 seconds
                #Scenario: Usuario lista los posts en el menu admin de Ghost
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item Posts
                And I wait for 2 seconds
                Then el usuario deberia ser redirigido a la lista de los posts
                And I wait for 2 seconds
                #Scenario: El usuario se dirige al formulario de crear post
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item Posts
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Post
                And I wait for 2 seconds
                Then el usuario deberia ser redirigido al formulario Crear Post
                And I wait for 2 seconds
                #Scenario: El usuario despliega la configuracion de un post
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item Posts
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Post
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Settings
                And I wait for 2 seconds
                Then el usuario deberia ver el menu de configuracion del Post
                And I wait for 2 seconds
                #Scenario: El usuario ve el preview de un post antes de publicarlo
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 2 seconds
                When el usuario hace click sobre el item Posts
                And I wait for 2 seconds
                And el usuario hace click sobre el boton New Post
                And I wait for 2 seconds
                And el usuario escribe en los campos Titulo y Contenido
                And I wait for 2 seconds
                And el usuario hace click sobre el boton Preview
                And I wait for 2 seconds
                Then el usuario deberia ver la previsualizacion del post
                And I wait for 2 seconds
                # Feature: Funcionalidad invitar staff al sitio con roles
                #         Scenario: Invitar staff al sitio sin digitar un email
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 4 seconds
                When el usuario hace clic en el boton de settings
                And I wait for 2 seconds
                And el usuario es redirigido a la pagina de settings
                And I wait for 2 seconds
                And el usuario hace clic en el boton de staff
                And I wait for 2 seconds
                And el usuario hace clic en el boton de invite people
                And I wait for 2 seconds
                Then el usuario hace clic en el boton de send invitation
                And I wait for 2 seconds
                Then el sistema muestra el mensaje de error "Please enter a valid email address."
                And I wait for 2 seconds
                # Scenario: Invitar staff al sitio con el Role Contributor
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 4 seconds
                When el usuario hace clic en el boton de settings
                And I wait for 2 seconds
                And el usuario es redirigido a la pagina de settings
                And I wait for 2 seconds
                And el usuario hace clic en el boton de staff
                And I wait for 2 seconds
                And el usuario hace clic en el boton de invite people
                And I wait for 2 seconds
                And el usuario ingresa correo del staff
                And I wait for 4 seconds
                Then el usuario hace clic en el boton de send invitation
                And I wait for 4 seconds
                # Scenario: Invitar staff al sitio con el Role Editor
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 4 seconds
                When el usuario hace clic en el boton de settings
                And I wait for 2 seconds
                And el usuario es redirigido a la pagina de settings
                And I wait for 2 seconds
                And el usuario hace clic en el boton de staff
                And I wait for 2 seconds
                And el usuario hace clic en el boton de invite people
                And I wait for 2 seconds
                And el usuario ingresa correo del staff
                And I wait for 2 seconds
                And el usuario selecciona el role Editor
                And I wait for 4 seconds
                Then el usuario hace clic en el boton de send invitation
                And I wait for 4 seconds
                # Scenario: Invitar staff al sitio con el Role Administrator
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 4 seconds
                When el usuario hace clic en el boton de settings
                And I wait for 2 seconds
                And el usuario es redirigido a la pagina de settings
                And I wait for 2 seconds
                And el usuario hace clic en el boton de staff
                And I wait for 2 seconds
                And el usuario hace clic en el boton de invite people
                And I wait for 2 seconds
                And el usuario ingresa correo del staff
                And I wait for 2 seconds
                And el usuario selecciona el role Administrator
                And I wait for 4 seconds
                Then el usuario hace clic en el boton de send invitation
                And I wait for 4 seconds
                # Scenario: Invitar staff al sitio con el Role Author
                Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
                And I wait for 4 seconds
                When el usuario hace clic en el boton de settings
                And I wait for 2 seconds
                And el usuario es redirigido a la pagina de settings
                And I wait for 2 seconds
                And el usuario hace clic en el boton de staff
                And I wait for 2 seconds
                And el usuario hace clic en el boton de invite people
                And I wait for 2 seconds
                And el usuario ingresa correo del staff
                And I wait for 2 seconds
                And el usuario selecciona el role Author
                And I wait for 4 seconds
                Then el usuario hace clic en el boton de send invitation
