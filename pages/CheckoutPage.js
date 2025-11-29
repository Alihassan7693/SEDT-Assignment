exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zip = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
        this.finishBtn = page.locator('#finish');
        this.successMsg = page.locator('.complete-header');
    }

    async fillDetails(fname, lname, zip) {
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.zip.fill(zip);
        await this.continueBtn.click();
    }

    async finishOrder() {
        await this.finishBtn.click();
    }

    async isOrderSuccess() {
        return await this.successMsg.innerText();
    }
};
