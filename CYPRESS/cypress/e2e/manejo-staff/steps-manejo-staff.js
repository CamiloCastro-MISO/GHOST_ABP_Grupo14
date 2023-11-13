import PageItem from './class-manejo-staff';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";


const pageItem = new PageItem();

Given('Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost', () => {
    pageItem.checkMainPage();
    cy.wait(1000)
});

When('el usuario hace clic en el boton de settings', () => {
    pageItem.goToSettings();
    cy.wait(1000)
});

And('el usuario es redirigido a la pagina de settings', () => {
    cy.url().should('eq', config.settings_url);
    cy.wait(1000)
});

And('el usuario hace clic en el boton de staff', () => {
    pageItem.goToStaff();
    cy.wait(1000)
});

And('el usuario hace clic en el boton de invite people', () => {
    pageItem.inviteNewStaff();
    cy.wait(1000)
});

And('el usuario no ingresa correo del staff' , () => {
    pageItem.typeofEmail(' ');
    cy.wait(1000)
});

And('el usuario ingresa correo del staff' , () => {
    pageItem.typeofEmail('dummy@mail.com');
    cy.wait(1000)
});

And('el usuario selecciona el role Contributor', () => {
    console.log('Role por defecto contributor')
    cy.wait(1000)
});

And('el usuario selecciona el role Editor', () => {
    pageItem.selectRole('#editor');
    cy.wait(1000)
});

And('el usuario selecciona el role Administrator', () => {
    pageItem.selectRole('#administrator');
    cy.wait(1000)
});

And('el usuario selecciona el role Author', () => {
    pageItem.selectRole('#author');
    cy.wait(1000)
});

Then('el sistema muestra el mensaje de error "Please enter a valid email address."', () => {
    pageItem.validate('Please enter a valid email address.');
    cy.wait(1000)
});

Then('el usuario hace clic en el boton de send invitation', () => {
    pageItem.sendInvitation();
    cy.wait(1000)
});


