class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("[id=username]");
    this.passwordInput = page.locator("[id=password]");
    this.loginButton = page.locator("[id=login-submit]");
    this.errorMessage = page.locator("[id=flash_error]");
  }

  async navigate() {
    await this.page.goto("https://www.redmine.org/login");
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

module.exports = { LoginPage };
