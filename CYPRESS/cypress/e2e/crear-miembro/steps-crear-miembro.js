import MemberItem from './class-crear-miembro';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

function generateDummyData() {
    const randomNum = Math.floor(Math.random() * 1000);
    const name = `DummyName${randomNum}`;
    const email = `dummy${randomNum}@example.com`;
    console.log(`Generated Name: ${name}, Generated Email: ${email}`);
    return { name, email };
}

const { name, email } = generateDummyData();

const memberItem = new MemberItem();

Given('Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost', () => {
    memberItem.checkMainPage();
    cy.wait(1000)
});

When('el usuario se dirige a la seccion members del sitio', () => {
    memberItem.goToMembers();
    cy.wait(1000);
    cy.url().should('eq', config.members_url);
});

And('el usuario da clic en el boton Add yourself as a member to test', () => {
    memberItem.addYourself();
    cy.wait(1000);
});

And('el usuario da clic en el boton New Member', () => {
    memberItem.newMember();
    cy.wait(1000);
});

And('el usario digita name y mail', () => {
    memberItem.fillMember(name, email);
    cy.wait(1000);
});

And('el usuario da clic en el boton Save', () => {
    memberItem.saveMember();
    cy.wait(1000);
});

And('el usuario vuelve a la seccion de miembros del sitio', () => {
    memberItem.goToMembers();
    cy.wait(1000);
    cy.url().should('eq', config.members_url);
});

And('el usuario da click a la seccion de miembros del sitio', () => {
    memberItem.goToMembers();
    cy.wait(1000);
});

And('el usario digita name y mail invalido', () => {
    memberItem.fillMember('admin', 'mailsinarroba');
    cy.wait(1000);
});

Then('el usuario da click en el boton Leave', () => {
    memberItem.leave();
    cy.wait(1000);
    cy.url().should('eq', config.members_url);
});

Then('el usuario ve una tabla con el usuario admin agregado', () => {
    memberItem.validateMember('admin', config.username);
    cy.wait(1000)
});

Then('el usuario ve una tabla con el usuario agregado', () => {
    memberItem.validateMember(name, email);
    cy.wait(1000)
});


Then('el usuario ve un error de usuario existente', () => {
    memberItem.validate('Member already exists. Attempting to add member with existing email address');
    cy.wait(1000);
});

Then('el usuario ve un error de mail invalido', () => {
    memberItem.validate('Invalid Email.');
    cy.wait(1000);
});

Then ('el usuario vuelve a la seccion de miembros del sitio', () => {
    memberItem.goToMembers();
    cy.wait(1000);
    cy.url().should('eq', config.members_url);
});









