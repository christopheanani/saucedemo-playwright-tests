import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page;

    readonly productTitle: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.productTitle = page.locator('[itemprop="name"]');
        this.addToCartButton = page.getByRole("button", {
            name: /add to cart/i,
        });
    }

    async addToCart() {

        await expect(this.addToCartButton)
            .toBeEnabled();

        await this.addToCartButton.click();

        // Remplace waitForTimeout par une attente sur un état réel
        await expect(
            this.page.getByRole('link', { name: /My Cart \(\d+\)/ })
        ).not.toHaveText('My Cart (0)');

    }

    async verifyProductPageLoaded() {
        await expect(this.productTitle).toBeVisible();
    }
}