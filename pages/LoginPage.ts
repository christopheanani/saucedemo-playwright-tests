import { expect, Locator, Page } from "@playwright/test";


export class LoginPage {

    readonly page: Page;

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;


    constructor(page: Page) {

        this.page = page;


        this.emailInput = page.getByRole("textbox", {
            name: "Email Address"
        });


        this.passwordInput = page.getByRole("textbox", {
            name: "Password"
        });


        this.loginButton = page.getByRole("button", {
            name: "Sign In"
        });

        this.errorMessage = page.getByText(
            "Incorrect email or password."
        );

    }


    async openLogin() {

        await this.page.goto(
            "https://sauce-demo.myshopify.com/account/login"
        );

    }


    async login(email: string, password: string) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }


    async verifyLoginPageLoaded() {

        await expect(this.emailInput)
            .toBeVisible();

    }

    async verifyLoginError() {

        await expect(this.errorMessage)
            .toBeVisible();

    }

}