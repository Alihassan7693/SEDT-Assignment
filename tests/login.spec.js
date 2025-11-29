const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test(' Verify User Login with Valid Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    const title = await products.isOnProductsPage();
    expect(title).toBe('Products');
});
