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

    validate(text) {
        cy.get('p.main-error').contains(text);
    }
}

export default LoginPage;
