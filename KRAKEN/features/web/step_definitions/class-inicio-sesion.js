class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async visit() {
        await this.driver.navigateTo('http://localhost:2368/ghost/#/signin');
    }

    async fillUsername(name) {
        let element = await this.driver.findElement({ id: 'identification' });
        await element.setValue(name);
    }

    async fillPassword(password) {
        let element = await this.driver.findElement({ id: 'password' });
        await element.setValue(password);
    }

    async submit() {
        let element = await this.driver.findElement({ css: 'button[data-test-button="sign-in"]' });
        await element.click();
    }
}

module.exports = LoginPage;
