import { test } from "@playwright/test";

import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { CartPage } from "../../pages/CartPage";


test("User can start checkout process", async ({page}) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cart = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);


    await homePage.goto();

    await homePage.openFirstProduct();

    await productPage.addToCart();

    await cart.openCart();

    await cart.clickCheckout();

    await checkoutPage.verifyCheckoutLoaded();

});