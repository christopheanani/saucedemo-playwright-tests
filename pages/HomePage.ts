import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;

    readonly firstProduct: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Premier produit de la grille
        this.firstProduct = page.getByRole('link', {
            name: /Grey jacket/i
        });

        // Bouton panier
        this.cartButton = page.locator('a[href="/cart"]');
    }

    async goto() {
        await this.page.goto("https://sauce-demo.myshopify.com/");
    }

    async openFirstProduct() {
        await this.firstProduct.click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async expectHomeLoaded() {
        await expect(this.page).toHaveTitle(/Sauce Demo/i);
    }
}