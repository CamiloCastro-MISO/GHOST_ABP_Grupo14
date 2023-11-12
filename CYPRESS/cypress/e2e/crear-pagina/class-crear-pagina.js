import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';

class PageItem {

    visit() {
        cy.visit(config.pages_url);
        cy.wait(1000)
    }

    visitDetail() {
        cy.visit('http://localhost:2368/ghost/#/editor/page')
        cy.wait(1000)
    }

    fillPage() {
        cy.get('textarea.gh-editor-title').type('Title');
        cy.wait(1000)
        cy.get('div.kg-prose').type('Text');
        cy.wait(1000)
    }

    submitPublish() {
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.wait(1000)
    }

    submitPreview() {
        cy.get('button[data-test-button="publish-preview"]').click();
        cy.wait(1000)
    }

    submitContinuePublish() {
        cy.get('button[data-test-button="continue"]').click();
        cy.wait(1000)
    }

    submitConfirmPublish() {
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(1000)
    }

    goToCreatePage() {
        cy.get('a[data-test-new-page-button=""]').click();
        cy.wait(1000);
        this.visitDetail()
        cy.wait(1000);
    }

    goToListPages() {
        cy.get('a[data-test-nav="pages"]').click();
        cy.wait(1000);
    }

    goToSettings() {
        cy.get('.settings-menu-toggle').click();
        cy.wait(1000);
    }

    checkMainPage() {
        let logIn = new LoginPage()
        logIn.visit();
        cy.wait(1000);
        logIn.login(config.username, config.password);
        cy.wait(1000);
        let dashboard = new DashBoardItem();
        dashboard.visit();
        cy.wait(1000)
    }
}

export default PageItem;