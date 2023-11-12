import PageItem from './class-crear-pagina'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const pageItem = new PageItem();

Given('Un usuario se encuentra en la pagina principal del admin de Ghost', () => {
    pageItem.checkMainPage();
    cy.url().should('eq', config.dashboard_url);
});

When('el usuario hace click sobre el item pages', () => {
    pageItem.goToListPages();
    cy.wait(1000)
});

And('el usuario hace click sobre el boton New Page', () => {
    pageItem.goToCreatePage();
    cy.wait(1000)
});

And('el usuario hace click sobre el boton Settings', () => {
    pageItem.goToSettings()
    cy.wait(1000)
});

And('el usuario escribe en los campos Titulo y Contenido', () => {
    pageItem.fillPage();
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Preview', () => {
    pageItem.submitPreview();
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Publicar', () => {
    pageItem.submitPublish()
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Continuar', () => {
    pageItem.submitContinuePublish()
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Publicar Ahora', () => {
    pageItem.submitConfirmPublish()
    cy.wait(1000);
});

Then('el usuario deberia ver el menu de configuracion', () => {
    cy.get('form[aria-label="Post settings"]').should('exist');
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido a la lista de las paginas', () => {
    cy.url().should('eq', config.pages_url);
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido al formulario crear pagina', () => {
    cy.url().should('eq', config.new_page_url);
    cy.wait(1000)
});

Then('el usuario deberia ver la previsualizacion de la pagina', () => {
    cy.get('button[data-test-button=publish-preview]').should('exist')
    cy.wait(1000)
});

Then('el usuario deberia ver la pagina como publicada', () => {
    cy.get('div.gh-publish-title').should('exist')
    cy.wait(1000)
});
