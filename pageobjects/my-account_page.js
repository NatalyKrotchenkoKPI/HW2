class MyAccountPage {
  constructor(page) {
    this.page = page;
    this.signInButton = page.locator("[class=login]");
    this.firstnameInput = page.locator("[id=user_firstname]");
    this.saveButton = page.locator('p.mobile-hide > [name="commit"]');
    this.flashNotice = page.locator("[id=flash_notice]");
  }

  async myAccPage() {
    await this.page.goto("https://www.redmine.org/my/account");
  }

  async enterFirstname(firstname) {
    await this.firstnameInput.fill(firstname);
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }

  async getMessage() {
    return await this.flashNotice.textContent();
  }
}

module.exports = { MyAccountPage };
