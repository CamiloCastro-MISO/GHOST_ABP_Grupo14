import config from "../../assets/config.json";
class LoginPage {

    visit() {
        cy.visit(config.sigin_url)
    }

    fillUsername(name) {
        cy.get('input#identification').type(name);
    }

    fillPassword(password) {
        cy.get('input#password').type(password);
    }

    submit() {
        cy.get('button[data-test-button="sign-in"]').click();
    }

    login(email, password) {
        cy.get('input#identification').type(email);
        cy.wait(1000)
        cy.get('input#password').type(password);
        cy.wait(1000)
        cy.get('button[data-test-button="sign-in"]').click();
        cy.wait(1000)
    }

    validate(text) {
        cy.get('p.main-error').contains(text);
    }
}

export default LoginPage;
