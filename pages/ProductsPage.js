exports.ProductsPage = class ProductsPage {
    constructor(page) {
        this.page = page;
        this.addToCartBtn = page.locator('button[id^="add-to-cart"]');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.pageTitle = page.locator('.title');
    }

    async isOnProductsPage() {
        await this.page.waitForSelector('.title');
        return await this.pageTitle.innerText();
    }

    async addFirstProductToCart() {
        await this.addToCartBtn.first().click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
};
