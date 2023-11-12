import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';

class PostItem {

    visit() {
        cy.visit(config.Posts_url);
        cy.wait(1000)
    }

    visitDetail() {
        cy.visit('http://localhost:2368/ghost/#/editor/post')
        cy.wait(1000)
    }

    fillPost() {
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
        cy.get('button[data-test-button="publish-flow-preview"]').click();
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

    goToCreatePost() {
        cy.get('a[data-test-new-post-button=""]').click();
        cy.wait(1000);
        this.visitDetail()
        cy.wait(1000);
    }

    goToListPosts() {
        cy.get('a[data-test-nav="posts"]').click();
        cy.wait(1000);
    }

    goToIconPosts() {
        cy.get('a[data-test-nav="new-story"]').click();
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

export default PostItem;