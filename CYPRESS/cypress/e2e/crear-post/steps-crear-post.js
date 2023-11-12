import PostItem from './class-crear-post'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const postItem = new PostItem();

Given('Un usuario se encuentra en la pagina principal del admin de Ghost', () => {
    postItem.checkMainPage();
    cy.url().should('eq', config.dashboard_url);
    cy.wait(1000)
});

When('el usuario hace click sobre el item Posts', () => {
    postItem.goToListPosts();
    cy.wait(1000)
});

When('el usuario hace click sobre el icono post', () => {
    postItem.goToIconPosts();
    cy.wait(1000)
});

And('el usuario hace click sobre el boton New Post', () => {
    postItem.goToCreatePost();
    cy.wait(1000)
});

And('el usuario hace click sobre el boton Settings', () => {
    postItem.goToSettings()
    cy.wait(1000)
});

And('el usuario escribe en los campos Titulo y Contenido', () => {
    postItem.fillPost();
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Preview', () => {
    postItem.submitPreview();
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Publicar', () => {
    postItem.submitPublish()
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Continuar', () => {
    postItem.submitContinuePublish()
    cy.wait(1000);
});

And('el usuario hace click sobre el boton Publicar Ahora', () => {
    postItem.submitConfirmPublish()
    cy.wait(1000);
});

Then('el usuario deberia ver el menu de configuracion del Post', () => {
    cy.get('form[aria-label="Post settings"]').should('exist');
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido a la lista de los posts', () => {
    cy.url().should('eq', config.posts_url);
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido al formulario Crear Post', () => {
    cy.url().should('eq', config.new_post_url);
    cy.wait(1000)
});

Then('el usuario deberia ver la previsualizacion del post', () => {
    cy.get('div.gh-browserpreview-iframecontainer').should('exist')
    cy.wait(1000)
});

Then('el usuario deberia ver el post como publicado', () => {
    cy.get('div.gh-publish-title').should('exist')
    cy.wait(1000)
});
