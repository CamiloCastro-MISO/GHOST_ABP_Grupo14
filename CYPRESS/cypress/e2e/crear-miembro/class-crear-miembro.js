import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';

class MemberItem {

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

    goToMembers() {
        cy.get('[data-test-nav="members"]').click();
        cy.wait(1000);
    }

    newMember() {
        cy.get('[data-test-new-member-button="true"]').click();
        cy.wait(1000);
    }

    fillMember(name, mail) {
        cy.get('#member-name').type(name);
        cy.wait(1000);
        cy.get('#member-email').type(mail);
        cy.wait(1000);
    }

    saveMember() {
        try {
            cy.get('button[data-test-button="save"]').click();
            cy.wait(1000);
        } catch (error){
            console.log(error);
        }
    }

    validate(text) {
        cy.get('p.response').contains(text);
        cy.wait(1000);
    }

    validateMember(name, email) {
        cy.get('p.gh-members-list-email').contains(email).should('be.visible');
        cy.wait(1000);
    }

    leave() {
        cy.get('[data-test-leave-button]').click();
        cy.wait(1000);
    }

    addYourself() {
        cy.get('body').then($body => {
            if ($body.find('[data-test-button="add-yourself"]').length > 0) {
                cy.get('[data-test-button="add-yourself"]').click();
            }
        });
        cy.wait(1000);
    }
}

export default MemberItem;