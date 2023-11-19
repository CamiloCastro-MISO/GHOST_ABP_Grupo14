import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';

class PageItem {


    takeScreenshot() {
        cy.wait(500);
        cy.screenshot();
    }

    visit() {
        cy.visit(config.pages_url);
        this.takeScreenshot();
        cy.wait(1000)
    }

    visitDetail() {
        cy.visit('http://localhost:2368/ghost/#/editor/page');
        this.takeScreenshot();
        cy.wait(1000)
    }

    fillPage() {
        cy.get('textarea.gh-editor-title').type('Title');
        this.takeScreenshot();
        cy.wait(1000)
        cy.get('div.kg-prose').type('Text');
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitPublish() {
        cy.get('button[data-test-button="publish-flow"]').click();
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitPreview() {
        cy.get('button[data-test-button="publish-preview"]').click();
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitContinuePublish() {
        cy.get('button[data-test-button="continue"]').click();
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitConfirmPublish() {
        cy.wait(1000)
        cy.get('[data-test-button="publish-flow"]').click({ force: true });
        this.takeScreenshot();
        cy.wait(1000)
    }

    goToCreatePage() {
        cy.get('a[data-test-new-page-button=""]').click();
        this.takeScreenshot();
        cy.wait(1000);
        this.visitDetail();
        cy.wait(1000);
    }

    goToListPages() {
        cy.get('a[data-test-nav="pages"]').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    goToSettings() {
        cy.get('.settings-menu-toggle').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    checkMainPage() {
        let logIn = new LoginPage()
        logIn.visit();
        this.takeScreenshot();
        cy.wait(1000);
        logIn.login(config.username, config.password);
        this.takeScreenshot();
        cy.wait(1000);
        let dashboard = new DashBoardItem();
        dashboard.visit();
        this.takeScreenshot();
        cy.wait(1000)
    }
}

export default PageItem;