const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/login_page.js");
const { MyPage } = require("../pageobjects/my_page.js");
const { MyAccountPage } = require("../pageobjects/my-account_page.js");
const fs = require("fs");

test("Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const myPage = new MyPage(page);
  const myAccountPage = new MyAccountPage(page);
  const userData = JSON.parse(
    fs.readFileSync("test-data/login_data.json", "utf-8"),
  );
  let currentURL;

  await loginPage.navigate();
  await loginPage.login(userData.username, userData.password);
  currentURL = page.url();
  await expect(currentURL).toBe("https://www.redmine.org/my/page");

  await myPage.clickSignOutButton();
  currentURL = page.url();
  await expect(currentURL).toBe("https://www.redmine.org/");

  await expect(myAccountPage.signInButton).toBeVisible();
});
