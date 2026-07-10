import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";


test("User can login with valid credentials", async ({page})=>{


    const loginPage = new LoginPage(page);


    await loginPage.openLogin();


    await loginPage.verifyLoginPageLoaded();


    await loginPage.login(
        "melodybliss03@gmail.com",
        "Azerty@1234"
    );


    await expect(page)
        .toHaveURL(/account/);


});