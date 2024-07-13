const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/login_page.js");
const randomData = require("../test-data/random_data.js");
const fs = require("fs");

test("Login with invalid password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const randomPassword = randomData.generateRandomText(10);
  const userData = JSON.parse(
    fs.readFileSync("test-data/login_data.json", "utf-8"),
  );

  await loginPage.navigate();

  await loginPage.enterUsername(userData.username);
  await expect(loginPage.usernameInput).toHaveValue(userData.username);

  await loginPage.enterPassword(randomPassword);
  await expect(loginPage.passwordInput).toHaveValue(randomPassword);

  await loginPage.clickLoginButton();
  await expect(loginPage.errorMessage).toHaveText("Invalid user or password");
});
