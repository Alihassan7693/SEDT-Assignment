const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Scenario 2: User Places an Order and Checks Out Successfully', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // Login
    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    // Add product
    await products.addFirstProductToCart();
    await products.goToCart();

    // Check product in cart
    expect(await cart.isProductAdded()).toBeTruthy();

    // Checkout
    await cart.checkout();
    await checkout.fillDetails('Ali', 'Hassan', '50700');
    await checkout.finishOrder();

    // Validate success message
    const msg = await checkout.isOrderSuccess();
    expect(msg).toBe('Thank you for your order!');
});
