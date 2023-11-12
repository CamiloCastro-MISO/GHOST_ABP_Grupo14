@page
Feature: Funcionalidad de crear una pagina

    @CrearPagina
    Scenario: El usuario crea una pagina
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver la pagina como publicada

    @ListarPaginas
    Scenario: Usuario visita el listar paginas en el admin de Ghost
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        Then el usuario deberia ser redirigido a la lista de las paginas

    @IrAlFormularioNuevaPagina
    Scenario: El usuario se dirige al formulario de crear pagina
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        Then el usuario deberia ser redirigido al formulario crear pagina

    @VerConfiguracionPagina
    Scenario: El usuario despliega la configuracion de una pagina
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario hace click sobre el boton Settings
        Then el usuario deberia ver el menu de configuracion

    @VerPreview
    Scenario: El usuario ve el preview de una pagina antes de publicarla
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton Preview
        Then el usuario deberia ver la previsualizacion de la pagina

