import PageItem from './class-crear-miembro';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";


const pageItem = new PageItem();

Given('Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost', () => {
    pageItem.checkMainPage();
    cy.wait(1000)
});



