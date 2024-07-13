const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/login_page.js");
const fs = require("fs");

test("Login with valid data", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  const userData = JSON.parse(
    fs.readFileSync("test-data/login_data.json", "utf-8"),
  );
  await loginPage.login(userData.username, userData.password);
  const currentURL = page.url();
  await expect(currentURL).toBe("https://www.redmine.org/my/page");
});
