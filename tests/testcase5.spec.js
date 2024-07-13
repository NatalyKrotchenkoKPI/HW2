const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/login_page.js");
const { MyAccountPage } = require("../pageobjects/my-account_page.js");
const fs = require("fs");
const randomData = require("../test-data/random_data.js");

test("Change First Name", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const myAccountPage = new MyAccountPage(page);
  const randomFirstname = randomData.generateRandomText(7);
  const userData = JSON.parse(
    fs.readFileSync("test-data/login_data.json", "utf-8"),
  );

  await loginPage.navigate();
  await loginPage.login(userData.username, userData.password);
  await myAccountPage.myAccPage();

  await myAccountPage.enterFirstname(randomFirstname);
  await expect(myAccountPage.firstnameInput).toHaveValue(randomFirstname);

  await myAccountPage.clickSaveButton();
  await expect(myAccountPage.flashNotice).toHaveText(
    "Account was successfully updated.",
  );
});
