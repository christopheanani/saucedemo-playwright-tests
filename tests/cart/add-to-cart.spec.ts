import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";
import { CartComponent } from "../../pages/components/CartComponent";


test("User can add a product to cart", async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cart = new CartComponent(page);


    await homePage.goto();

    await homePage.openFirstProduct();

    const initialCount = await cart.getCartCount();

    await productPage.addToCart();

    const newCount = await cart.getCartCount();

    expect(newCount).toBe(initialCount + 1);

});