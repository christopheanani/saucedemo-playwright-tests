import { expect, Locator, Page } from "@playwright/test";

export class CheckoutPage {

  readonly page: Page;

  readonly checkoutTitle: Locator;


  constructor(page: Page){

    this.page = page;

    this.checkoutTitle = page.getByRole("heading", {
      name: /my cart|checkout/i
    });

  }


  async verifyCheckoutLoaded(){

    await expect(this.checkoutTitle)
      .toBeVisible();

  }

}