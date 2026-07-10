import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";


test("User cannot login with invalid credentials", async ({ page }) => {


    const loginPage = new LoginPage(page);


    await loginPage.openLogin();


    await loginPage.login(
        "wrong@email.com",
        "wrongpassword"
    );

    await page.waitForTimeout(3000);

    console.log(await page.locator("body").innerText());


});