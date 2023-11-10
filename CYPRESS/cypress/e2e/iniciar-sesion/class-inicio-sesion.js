class LoginPage {
    visit() {
        cy.visit('http://localhost:2368/ghost/#/signin')
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
}

export default LoginPage;
