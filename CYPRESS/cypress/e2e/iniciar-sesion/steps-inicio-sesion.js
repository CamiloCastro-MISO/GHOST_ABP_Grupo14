
import LoginPage from './class-inicio-sesion'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();

beforeEach(() => {
    cy.log('Iniciando Escenario de Prueba: Login Exitoso');
    cy.wait(1000)
});

Given('Un usuario se encuentra en la pagina de inicio de sesion de Ghost', () => {
    loginPage.visit();
    cy.wait(1000)
});

When('el usuario introduce un nombre de usuario y contrasena correctos', () => {
    loginPage.fillUsername('bc.castro@uniandes.edu.co');
    cy.wait(1000)
    loginPage.fillPassword('0123456789');
    cy.wait(1000)
});

And('el usuario hace clic en el boton de inicio de sesion', () => {
    loginPage.submit();
    cy.wait(1000)
});

Then('el usuario deberia ser redirigido al dashboard principal de Ghost', () => {
    cy.url().should('eq', 'http://localhost:2368/ghost/#/dashboard');
    cy.wait(1000)
});
