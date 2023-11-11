@page
Feature: Funcionalidad de crear una pagina
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

    @LlenarValorDelTitulo
    Scenario: El usuario se encuentra en el formulario de crear una pagina
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        Then el usuario deberia ser redirigido al formulario crear pagina