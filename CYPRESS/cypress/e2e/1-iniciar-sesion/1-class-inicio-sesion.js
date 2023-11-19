import config from "../../assets/config.json";


class LoginPage {

    takeScreenshot() {
        cy.wait(500);
        cy.screenshot();
    }

    visit() {
        cy.visit(config.sigin_url)
        this.takeScreenshot();
    }

    fillUsername(name) {
        cy.get('input#identification').type(name);
        this.takeScreenshot();
    }

    fillPassword(password) {
        cy.get('input#password').type(password);
        this.takeScreenshot();
    }

    submit() {
        cy.get('button[data-test-button="sign-in"]').click();
        this.takeScreenshot();
    }

    login(email, password) {
        cy.get('input#identification').type(email);
        cy.wait(1000)
        this.takeScreenshot();
        cy.get('input#password').type(password);
        cy.wait(1000)
        this.takeScreenshot();
        cy.get('button[data-test-button="sign-in"]').click();
        cy.wait(1000)
        this.takeScreenshot();
    }

    validate(text) {
        cy.wait(1000);
        cy.get('p.main-error').contains(text);
        this.takeScreenshot(); 

    }
}

export default LoginPage;
