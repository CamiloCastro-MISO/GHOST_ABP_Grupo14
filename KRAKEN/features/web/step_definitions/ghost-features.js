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
const { name1, email1 } = generateDummyData();

When('Recargo la pagina', async function () {
    await this.driver.pause(1000);
    return await this.driver.refresh();
});
// OBJECTS// OBJECTS// OBJECTS// OBJECTS// OBJECTS// OBJECTS// OBJECTS
async function typeText(selector, text) {
    await this.driver.pause(1000);
    let element = await this.driver.$(selector);
    return await element.setValue(text);
}

async function clickButton(selector) {
    await this.driver.pause(1000);
    let element = await this.driver.$(selector);
    return await element.click();
}

async function validateUrl(expectedUrl) {
    await this.driver.pause(1000);
    let currentUrl = await this.driver.getUrl();
    if (currentUrl !== expectedUrl) {
        throw new Error(`URL esperada era ${expectedUrl}, pero se encontró ${currentUrl}`);
    }
    await this.driver.pause(1000);
}
// OBJECTS// OBJECTS// OBJECTS// OBJECTS// OBJECTS// OBJECTS// OBJECTS

When('I enter email {string}', async function (email) {
    typeText.call(this, 'input#identification', email);
});

When('I enter password {string}', async function (password) {
    typeText.call(this, 'input#password', password);
});

When('I click on Sign in button', async function () {
    clickButton.call(this, 'button[data-test-button="sign-in"]');
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
    validateUrl.call(this, expectedUrl);
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

Then('el usuario ve una tabla con el usuario agregado', async function () {
    await this.driver.pause(1000);
    let element = this.driver.$('p.gh-members-list-email');
    const emailText = await element.getText();
    console.log("expected: "+ email);
    if (!emailText.includes(email)) {
        throw new Error(`Expected email not found. Found: ${emailText}`);
    }
});

When('el usuario da clic en el boton New Member', async function () {
    clickButton.call(this, '[data-test-new-member-button="true"]');
});

When('el usuario digita name y mail', async function () {
    typeText.call(this, '#member-name', name);
    await this.driver.pause(4000);
    typeText.call(this, '#member-email', email);
});

When('el usuario digita name y mail invalido', async function () {
    typeText.call(this, '#member-name', name);
    await this.driver.pause(4000);
    typeText.call(this, '#member-email', 'mailsinarroba');
});

When('el usuario da clic en el boton Save', async function () {
    clickButton.call(this, 'button[data-test-button="save"]');
});

When('el usuario vuelve a la seccion de miembros del sitio', async function () {
    validateUrl.call(this, config.members_url);
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

Then('el usuario ve un error de mail invalido {string}', async function (expectedErrorMessage) {
    await this.driver.pause(1000);
    let element = await this.driver.$('div.gh-cp-member-email-name > div.form-group.max-width.error > p');
    await this.driver.pause(1000);
    let currentErrorMessage = await element.getText();
    if (currentErrorMessage.includes(expectedErrorMessage) === false) {
        throw new Error(`Mensaje de error esperado era ${expectedErrorMessage}, pero se encontró ${currentErrorMessage}`);
    }
});

Then('el usuario da click a la seccion de miembros del sitio', async function () {
    clickButton.call(this, '[data-test-nav="members"]');
});

Then('el usuario da click en el boton Leave', async function () {
    clickButton.call(this, '[data-test-leave-button]');
});

When('el usuario hace click sobre el item pages', async function () {
    clickButton.call(this, '[data-test-nav="pages"]');
});

Then('el usuario hace click sobre el boton New Page', async function () {
    clickButton.call(this, '[data-test-new-page-button=""]');
});

Then('el usuario escribe en los campos Titulo y Contenido', async function () {
    typeText.call(this, 'textarea.gh-editor-title', 'Title');
    await this.driver.pause(4000);
    typeText.call(this, 'div.kg-prose', 'Text');
});

Then('el usuario hace click sobre el boton Publicar', async function () {
    clickButton.call(this, 'button[data-test-button="publish-flow"]');
});

Then('el usuario hace click sobre el boton Continuar', async function () {
    clickButton.call(this, 'button[data-test-button="continue"]');
});

Then('el usuario hace click sobre el boton Publicar Ahora', async function () {
    clickButton.call(this, 'button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
});


Then('el usuario deberia ver la pagina como publicada', async function () {
    clickButton.call(this, 'button[data-test-button="publish-preview"]');
});


Then('el usuario deberia ser redirigido a la lista de las paginas', async function () {
    await this.driver.pause(2000);
    validateUrl.call(this, config.pages_url);
});

Then('el usuario deberia ser redirigido al formulario crear pagina', async function () {
    await this.driver.pause(2000);
    validateUrl.call(this, config.new_page_url);
});

Then('el usuario hace click sobre el boton Settings', async function () {
    clickButton.call(this, '.settings-menu-toggle');
});


Then("el usuario deberia ver el menu de configuracion", async function () {
    clickButton.call(this, 'form[aria-label="Post settings"]');
});


Then('el usuario hace click sobre el boton Preview', async function () {
    clickButton.call(this, 'button[data-test-button="publish-preview"]');
});


Then('el usuario deberia ver la previsualizacion de la pagina', async function () {
    clickButton.call(this, 'button[data-test-button="publish-preview"]');
});

When('el usuario hace click sobre el item Posts', async function () {
    clickButton.call(this, 'a[data-test-nav="posts"]');
});


Then('el usuario hace click sobre el boton New Post', async function () {
    clickButton.call(this, 'a[data-test-nav="new-story"]');
});

Then('el usuario deberia ver la previsualizacion del post', async function () {
    clickButton.call(this, 'button[data-test-button="publish-preview"]');
});

Then('el usuario deberia ver el menu de configuracion del Post', async function () {
    clickButton.call(this, '.settings-menu-toggle');
});

Then('el usuario deberia ver el post como publicado', async function () {
    await this.driver.pause(1000);
    await this.driver.$('button.gh-back-to-editor').waitForExist({ timeout: 5000 });
    await this.driver.pause(1000);
});

When('el usuario hace click sobre el icono post', async function () {
    clickButton.call(this, '[data-test-nav="new-story"]');
});

Then('el usuario deberia ser redirigido a la lista de los posts', async function () {
    validateUrl.call(this, config.posts_url);
});


Then('el usuario deberia ser redirigido al formulario Crear Post', async function () {
    validateUrl.call(this, config.new_post_url);
});

When('el usuario hace clic en el boton de settings', async function () {
    clickButton.call(this, '[data-test-nav="settings"]');
});

Then('el usuario es redirigido a la pagina de settings', async function () {
    validateUrl.call(this, config.settings_url);
});

Then('el usuario hace clic en el boton de staff', async function () {
    clickButton.call(this, '#staff');
});

Then('el usuario hace clic en el boton de invite people', async function () {
    clickButton.call(this, "//button[contains(., 'Invite people')]");
});

Then('el usuario ingresa correo del staff', async function () {
    typeText.call(this, 'input[placeholder="jamie@example.com"]', email1);
});

Then('el usuario selecciona el role Editor', async function () {
    clickButton.call(this, '#editor');
});


Then('el usuario selecciona el role Administrator', async function () {
    clickButton.call(this, '#administrator');
});

Then('el usuario selecciona el role Author', async function () {
    clickButton.call(this, '#author');
});


Then('el usuario hace clic en el boton de send invitation', async function () {
    clickButton.call(this, "//button[contains(., 'Send invitation now')]");
});


Then('el sistema muestra el mensaje de error "Please enter a valid email address."', async function () {
    await this.driver.pause(1000);
    let element = await this.driver.$('span.text-red');
    let currentErrorMessage = await element.getText();
    const expectedErrorMessage = 'Please enter a valid email address.';
    if (!currentErrorMessage.includes(expectedErrorMessage)) {
        throw new Error(`Mensaje de error esperado era "${expectedErrorMessage}", pero se encontró "${currentErrorMessage}"`);
    }
});




