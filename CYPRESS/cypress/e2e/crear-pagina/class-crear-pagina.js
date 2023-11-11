import config from "../../assets/config.json";
import LoginPage from '../iniciar-sesion/class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';

class PageItem {

    visit() {
        cy.visit(config.pages_url);
    }

    visitDetail(){
        cy.visit('http://localhost:2368/ghost/#/editor/page')
    }

 
    fillForm(title, textBody) { 
        cy.get('textarea.gh-editor-title').type(name);
        cy.wait(1000)  
        cy.get('input#password').type(password);
        cy.wait(1000)
    }

    submitPublish() {
        cy.get('button[data-test-button="publish-flow"]').click();
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

    checkMainPage(){
        let logIn  = new LoginPage()
        logIn.visit();
        cy.wait(1000);
        logIn.login(config.user, config.password);
        cy.wait(1000);
        let dashboard = new DashBoardItem();
        dashboard.visit();
        cy.wait(1000)
    }
}

export default PageItem;