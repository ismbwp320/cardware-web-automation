import { expect } from "@playwright/test";
import { CatalystConfig } from "../config";

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators (update these if your UI has better labels)
    this.usernameInput = page.getByRole("textbox").first();
    this.passwordInput = page.getByRole("textbox").nth(1);
    this.signInButton = page.getByRole("button", { name: "Sign In" });
  }

  async goto() {
    await this.page.goto(
      `${CatalystConfig.BASE_URL}${CatalystConfig.PATHS.LOGIN}`
    );
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await Promise.all([
      this.page.waitForNavigation(),
      this.signInButton.click(),
    ]);

    await expect(this.page).not.toHaveURL(/login/i);
  }
}
