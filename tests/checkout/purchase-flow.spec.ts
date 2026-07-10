import { test } from "@playwright/test";

import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";


test("User can add product and start checkout", async ({page})=>{


  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);



  await homePage.goto();


  await homePage.openFirstProduct();


  await productPage.verifyProductPageLoaded();


  await productPage.addToCart();


  await cartPage.openCart();


  await cartPage.verifyCartContainsProduct();


  await cartPage.checkout();


  await checkoutPage.verifyCheckoutLoaded();


});