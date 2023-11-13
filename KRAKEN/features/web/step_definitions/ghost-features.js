const { When, Then } = require('@cucumber/cucumber');
const config = require('../../config.json');

function generateDummyData() {
    const randomNum = Math.floor(Math.random() * 1000);
    const name = `DummyName${randomNum}`;
    const email = `dummy${randomNum}@example.com`;
    console.log(`Generated Name: ${name}, Generated Email: ${email}`);
    return { name, email };
}

const { name, email } = generateDummyData();

When('Recargo la pagina', async function () {
    await this.driver.pause(1000);
    return await this.driver.refresh();
});

When('I enter email {string}', async function (email) {
    await this.driver.pause(1000);
    let element = await this.driver.$('input#identification');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    await this.driver.pause(1000);
    let element = await this.driver.$('input#password');
    return await element.setValue(password);
});

When('I click on Sign in button', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('button[data-test-button="sign-in"]');
    return await element.click();
});

When('el usuario da clic en el boton Add yourself as a member to test', async function () {
    await this.driver.pause(1000);
    try {
        let element = await this.driver.$('[data-test-button="add-yourself"]');
        return await element.click();
    } catch (error) {
        console.log(error);
    }
});

Then('la URL deberia ser {string}', async function (expectedUrl) {
    await this.driver.pause(1000);
    let currentUrl = await this.driver.getUrl();
    if (currentUrl !== expectedUrl) {
        throw new Error(`URL esperada era ${expectedUrl}, pero se encontró ${currentUrl}`);
    }
});

Then('debería ver el mensaje de error {string}', async function (expectedErrorMessage) {
    await this.driver.pause(1000);
    let element = await this.driver.$('p.main-error');
    let currentErrorMessage = await element.getText();
    if (currentErrorMessage.includes(expectedErrorMessage) === false) {
        throw new Error(`Mensaje de error esperado era ${expectedErrorMessage}, pero se encontró ${currentErrorMessage}`);
    }
});

Then('el usuario ve una tabla con el usuario admin agregado {string}', async function (email) {
    await this.driver.pause(1000);
    let element = this.driver.$('p.gh-members-list-email');
    const emailText = await element.getText();
    if (!emailText.includes(config.username)) {
        throw new Error(`Expected email not found. Found: ${emailText}`);
    }
});

When('el usuario da clic en el boton New Member', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('[data-test-new-member-button="true"]');
    return await element.click();
});

When('el usuario digita name y mail', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('#member-name');
    await element.setValue(name);
    element = await this.driver.$('#member-email');
    await element.setValue(email);
});

When('el usuario digita name y mail invalido', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('#member-name');
    await element.setValue(name);
    element = await this.driver.$('#member-email');
    await element.setValue('mailsinarroba');
});

When('el usuario da clic en el boton Save', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('button[data-test-button="save"]');
    return await element.click();
});

When('el usuario vuelve a la seccion de miembros del sitio', async function () {
    await this.driver.pause(1000);
    let currentUrl = await this.driver.getUrl();
    if (currentUrl !== config.members_url) {
        throw new Error(`URL esperada era ${config.members_url}, pero se encontró ${currentUrl}`);
    }
});

Then('el usuario ve una tabla con el usuario agregado', async function () {
    await this.driver.pause(1000);
    let element = this.driver.$('p.gh-members-list-email');
    const emailText = await element.getText();
    if (!emailText.includes(email)) {
        throw new Error(`Expected email not found. Found: ${emailText}`);
    }
});

Then('el usuario ve un error de usuario existente', async function () {
    await this.driver.pause(1000);
    let elements = await this.driver.$$('p.response');

    if (elements.length === 0) {
        throw new Error('El elemento del mensaje de error no se encuentra en la página.');
    }

    let currentErrorMessage = await elements[0].getText();
    const expectedErrorMessage = 'Member already exists. Attempting to add member with existing email address';

    if (!currentErrorMessage.includes(expectedErrorMessage)) {
        throw new Error(`Mensaje de error esperado era "${expectedErrorMessage}", pero se encontró "${currentErrorMessage}"`);
    }
});

Then('el usuario ve un error de mail invalido', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('.gh-cp-member-email-name p.response');
    await this.driver.pause(1000);
    let currentErrorMessage = await element.getText();
    if (currentErrorMessage.includes('Invalid Email') === false) {
        throw new Error(`Mensaje de error esperado era Invalid email address, pero se encontró ${currentErrorMessage}`);
    }
});

Then('el usuario da click a la seccion de miembros del sitio', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('[data-test-nav="members"]');
    return await element.click();
});

Then('el usuario da click en el boton Leave', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('[data-test-leave-button]');
    return await element.click();
});




