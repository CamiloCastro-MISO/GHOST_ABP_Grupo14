import config from "../../assets/config.json";

class DashBoardItem {

    visit() {
        cy.visit(config.dashboard_url);
        cy.wait(1000);
    }  
}

export default DashBoardItem;