import { expect, Locator, Page } from "@playwright/test";


export class CartPage {

    readonly page: Page;
    readonly cartItems: Locator;
    checkout: any;
    checkoutButton: Locator;

    readonly removeButton: Locator;
    readonly emptyCartMessage: Locator;


    constructor(page: Page) {

        this.page = page;

        this.cartItems = page.locator(
            'input[name="updates[]"]'
        );

        this.checkoutButton = page.locator("#checkout");

        // bouton x pour supprimer le produit
        this.removeButton = page.getByRole("link", {
            name: "x"
        });

        // message panier vide
        this.emptyCartMessage = page.getByText(
            /cart is currently empty/i
        );

    }


    async openCart() {

        await this.page.goto(
            "https://sauce-demo.myshopify.com/cart"
        );

        await expect(this.checkoutButton)
            .toBeVisible();

    }


    async verifyCartContainsProduct() {

        await expect(this.cartItems.first())
            .toBeVisible();

    }


    async clickCheckout() {

        await expect(this.checkoutButton)
            .toBeVisible();

        await this.checkoutButton.click();

    }

    async removeProduct() {

        await expect(this.removeButton)
            .toBeVisible();

        await this.removeButton.click();

    }


    async verifyCartEmpty() {

        await expect(this.emptyCartMessage)
            .toBeVisible();

    }

}