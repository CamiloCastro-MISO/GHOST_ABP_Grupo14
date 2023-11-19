import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';

class PageItem {

    takeScreenshot() {
        cy.wait(500);
        cy.screenshot();
    }

    goToSettings() {
        cy.get('[data-test-nav="settings"]').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    goToStaff() {
        cy.get('#staff').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    inviteNewStaff() {
        cy.contains('button', 'Invite people').click();
        this.takeScreenshot();
        cy.wait(1000);
    }
s
    selectRole(role) {
        cy.get(role).check();
        this.takeScreenshot();
        cy.wait(1000);
    }

    sendInvitation() {
        cy.contains('button', 'Send invitation now').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    typeofEmail(email) {
        cy.get('input[placeholder="jamie@example.com"]').type(email);
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

    validate(text) {
        cy.get('span.text-red').contains(text);
        this.takeScreenshot();
        cy.wait(1000);
    }

}

export default PageItem;