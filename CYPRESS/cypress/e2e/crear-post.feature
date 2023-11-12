@page
Feature: Funcionalidad de crear un post

    @CrearPost
    Scenario: El usuario crea un post
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item Posts
        And el usuario hace click sobre el boton New Post
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver el post como publicado

    @CrearPostDesdeIcono
    Scenario: El usuario crea un post con el icono de nuevo post
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el icono post
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver el post como publicado

    @ListarPosts
    Scenario: Usuario lista los posts en el menu admin de Ghost
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item Posts
        Then el usuario deberia ser redirigido a la lista de los posts

    @IrAlFormularioCrearPost
    Scenario: El usuario se dirige al formulario de crear post
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item Posts
        And el usuario hace click sobre el boton New Post
        Then el usuario deberia ser redirigido al formulario Crear Post

    @VerConfiguracionPost
    Scenario: El usuario despliega la configuracion de un post
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item Posts
        And el usuario hace click sobre el boton New Post
        And el usuario hace click sobre el boton Settings
        Then el usuario deberia ver el menu de configuracion del Post

    @VerPreviewPost
    Scenario: El usuario ve el preview de un post antes de publicarlo
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item Posts
        And el usuario hace click sobre el boton New Post
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton Preview
        Then el usuario deberia ver la previsualizacion del post
