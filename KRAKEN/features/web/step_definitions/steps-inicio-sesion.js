const { Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('./class-inicio-sesion');

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('input#identification');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('input#password');
    return await element.setValue(password);
});

When('I click on Sign in button', async function () {
    let element = await this.driver.$('button[data-test-button="sign-in"]');
    return await element.click();
});

Then('la URL deberia ser {string}', async function (expectedUrl) {
    let currentUrl = await this.driver.getUrl();
    if (currentUrl !== expectedUrl) {
        throw new Error(`URL esperada era ${expectedUrl}, pero se encontró ${currentUrl}`);
    }
});

Then('debería ver el mensaje de error {string}', async function (expectedErrorMessage) {
    let element = await this.driver.$('p.main-error');
    let currentErrorMessage = await element.getText();
    if (currentErrorMessage.includes(expectedErrorMessage) === false) {
        throw new Error(`Mensaje de error esperado era ${expectedErrorMessage}, pero se encontró ${currentErrorMessage}`);
    }
});


