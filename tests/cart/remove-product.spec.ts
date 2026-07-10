import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";


test("User can remove a product from cart", async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);


    // Precondition : add product to cart
    await homePage.goto();

    await homePage.openFirstProduct();

    await productPage.addToCart();


    // Open cart
    await cartPage.openCart();


    // Remove product
    await cartPage.removeProduct();


    // Verify empty cart
    await expect(
        page.getByText(/cart is currently empty/i)
    ).toBeVisible();

});