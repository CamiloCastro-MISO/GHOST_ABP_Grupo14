import LoginPage from './1-class-inicio-sesion'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const loginPage = new LoginPage();

beforeEach(() => {
    cy.log('Iniciando Escenario de Prueba: Login Fallido 1');
    cy.wait(100)
});

Given('Un usuario se encuentra en la pagina de inicio de sesion de Ghost', () => {
    loginPage.visit();
    cy.wait(1000)
});

When('el usuario introduce un nombre de usuario y contrasena incorrectos', () => {
    loginPage.fillUsername('hd.martinezd1@uniandes.edu.co');
    cy.wait(1000)
    loginPage.fillPassword('00000');
    cy.wait(1000)
});

And('el usuario hace clic en el boton de inicio de sesion', () => {
    loginPage.submit();
    cy.wait(1000)
});

Then('el usuario deberia recibir el mensaje de error', () => {
    loginPage.validate('There is no user with that email address.')
    cy.wait(1000);
});

beforeEach(() => {
    cy.log('Iniciando Escenario de Prueba: Login Fallido 2');
    cy.wait(100)
});


When('el usuario introduce solamente un nombre de usuario correcto', () => {
    loginPage.fillUsername('hdmartinezd@unal.edu.co');
    cy.wait(1000)
});

Then('el usuario deberia recibir el mensaje de error', () => {
    loginPage.validate('Please fill out the form to sign in.')
    cy.wait(1000);
});

beforeEach(() => {
    cy.log('Iniciando Escenario de Prueba: Login Fallido 3');
    cy.wait(100)
});

When('el usuario introduce solamente una contrasena correcta', () => {
    loginPage.fillPassword('Rideawave123');
    cy.wait(1000)
});

beforeEach(() => {
    cy.log('Iniciando Escenario de Prueba: Login Fallido 4');
    cy.wait(100)
});

When('el usuario no introduce nombre de usuario ni contrasena', () => {
    cy.wait(1000)
});

Then('el usuario deberia recibir el mensaje de error', () => {
    cy.get('p.main-error').should('exist');
    cy.wait(1000)
});

beforeEach(() => {
    cy.log('Iniciando Escenario de Prueba: Login Exitoso');
    cy.wait(100)
});

When('el usuario introduce un nombre de usuario y contrasena correctos', () => {
    loginPage.fillUsername('hdmartinezd@unal.edu.co');
    cy.wait(1000)
    loginPage.fillPassword('Rideawave123');
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido al dashboard principal de Ghost', () => {
    cy.url().should('eq', 'http://localhost:2368/ghost/#/dashboard');
    cy.wait(1000)
});
