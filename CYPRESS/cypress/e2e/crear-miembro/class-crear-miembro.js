import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';

class PageItem {

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