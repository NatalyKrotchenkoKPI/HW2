class MyPage {
  constructor(page) {
    this.page = page;
    this.signOutButton = page.locator("[class=logout]");
  }
  async clickSignOutButton() {
    await this.signOutButton.click();
  }
}

module.exports = { MyPage };
