exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItem = page.locator('.cart_item');
        this.checkoutBtn = page.locator('#checkout');
    }

    async isProductAdded() {
        return await this.cartItem.count() > 0;
    }

    async checkout() {
        await this.checkoutBtn.click();
    }
};
