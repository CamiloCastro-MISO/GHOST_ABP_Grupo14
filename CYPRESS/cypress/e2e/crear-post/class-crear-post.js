import config from "../../assets/config.json";
class PostItem {
    visit() {
        cy.visit(config.posts_url)
    }

    fillFormPost(){
        cy.get('textarea.gh-editor-title').type(name);
        cy.wait(1000)  
        cy.get('input#password').type(password);
        cy.wait(1000)
    }

    submit() {
        cy.get('button[data-test-button="sign-in"]').click();
    }
}

export default PostItem;