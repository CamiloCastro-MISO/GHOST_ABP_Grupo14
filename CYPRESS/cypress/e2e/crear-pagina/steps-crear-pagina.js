
import PageItem from './class-crear-pagina'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const pageItem = new PageItem();

beforeEach(() => {
    cy.log('Iniciando Escenario de Prueba: Crear Pagina');
    cy.wait(1000)
});

// @ListarPaginas
Given('Un usuario se encuentra en la pagina principal del admin de Ghost', () => {
    pageItem.checkMainPage();
    cy.url().should('eq', config.dashboard_url);
});

When('el usuario hace click sobre el item pages', () => {
    pageItem.goToListPages();
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido a la lista de las paginas', () => { 
    cy.url().should('eq', config.pages_url);
    cy.wait(1000)
});

And('el usuario hace click sobre el boton New Page', () => {
    pageItem.goToCreatePage()
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido al formulario crear pagina', () => { 
    cy.url().should('eq', config.new_page_url);
    cy.wait(1000)
});