const { Given, When, Then, And } = require('@cucumber/cucumber');
const LoginPage = require('./class-inicio-sesion');

let driver; // Asume que 'driver' es tu instancia de WebDriver

Given('I navigate to page "http://localhost:2368/ghost/#/signin"', async () => {
    // Aquí Kraken manejará la navegación
});

When('el usuario introduce un nombre de usuario {string}', async (username) => {
    const loginPage = new LoginPage(driver);
    await loginPage.fillUsername(username);
});

And('el usuario introduce una contrasena {string}', async (password) => {
    const loginPage = new LoginPage(driver);
    await loginPage.fillPassword(password);
});

When('el usuario hace clic en el boton de inicio de sesion', async () => {
    const loginPage = new LoginPage(driver);
    await loginPage.submit();
});

Then('el usuario deberia ser redirigido al dashboard principal de Ghost', async () => {
    await driver.wait(driver.until.urlIs('http://localhost:2368/ghost/#/dashboard'));
});
