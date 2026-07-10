import { expect, Locator, Page } from "@playwright/test";


export class CartComponent {

    readonly page: Page;
    readonly cartCount: Locator;
    readonly checkoutButton: Locator;


    constructor(page: Page) {

        this.page = page;

        this.cartCount = page.locator("#cart-target-desktop");

        // this.checkoutButton = page.getByRole("button", {
        //     name: /check out/i
        // });

        this.checkoutButton = page.getByText("Check Out", {
            exact: true
        });

    }


    async getCartCount() {

        const text = await this.cartCount.textContent();

        return Number(text?.replace(/[()]/g, ""));

    }


    async clickCheckout() {

        await expect(this.checkoutButton)
            .toBeVisible();

        await this.checkoutButton.click();

    }


   async openCart(){

    await this.page.goto(
        "https://sauce-demo.myshopify.com/cart"
    );

    await expect(this.checkoutButton)
        .toBeVisible();

}


    async verifyCartCount(expectedCount: string) {

        await expect(this.cartCount)
            .toHaveText(`(${expectedCount})`);

    }

}