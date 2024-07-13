const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/login_page.js");
const randomData = require("../test-data/random_data.js");
const fs = require("fs");

test("Login with invalid username", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const userData = JSON.parse(
    fs.readFileSync("test-data/login_data.json", "utf-8"),
  );
  const randomLogin = randomData.generateRandomText(10);

  await loginPage.navigate();

  await loginPage.enterUsername(randomLogin);
  await expect(loginPage.usernameInput).toHaveValue(randomLogin);

  await loginPage.enterPassword(userData.password);
  await expect(loginPage.passwordInput).toHaveValue(userData.password);

  await loginPage.clickLoginButton();
  await expect(loginPage.errorMessage).toHaveText("Invalid user or password");
});
