import { expect } from '@playwright/test';
import { CatalystConfig } from "../config";
import path from "path";

const authFile = path.join(__dirname, `../${CatalystConfig.AUTH_FILE}`);


export class LoginPage {
  constructor(page) {
    this.page = page;
    
  }

  async goto() {
    await this.page.goto(`${CatalystConfig.BASE_URL}${CatalystConfig.PATHS.LOGIN}`);
  }

  async login(username, password) {
    await this.page.getByRole('textbox', { name: 'Input Field' }).first().click();
    await this.page.getByRole('textbox', { name: 'Input Field' }).first().fill(username);
    await this.page.getByRole('textbox', { name: 'Input Field' }).nth(1).click();
    await this.page.getByRole('textbox', { name: 'Input Field' }).nth(1).fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();

    //  // Verify redirection to home page
    // await this.page.waitForURL(new RegExp(`${CatalystConfig.PATHS.HOME}$`));
    // // eslint-disable-next-line playwright/no-standalone-expect
    // await expect(this.page).toHaveURL(new RegExp(`${CatalystConfig.PATHS.HOME}$`));

    // Save auth state
    await this.page.context().storageState({ path: authFile });
    await this.page.waitForTimeout(5000);

    // await this.page.getByTestId(WEB_SELECTORS.MENU_ICON).click();
    // await this.page.getByTestId(WEB_SELECTORS.LOGIN_LINK).click();
    // await this.page.getByTestId(WEB_SELECTORS.LOGIN_EMAIL_INPUT).fill(WEB_CONSTANTS.LOGIN_EMAIL);
    // await this.page.getByTestId(WEB_SELECTORS.LOGIN_PASSWORD_INPUT).fill(WEB_CONSTANTS.LOGIN_PASSWORD);
    // await this.page.getByTestId(WEB_SELECTORS.LOGIN_SUBMIT_BUTTON).click();
    // await this.page.waitForTimeout(5000);
  }

  // async logout() {
  //   await this.page.getByTestId(WEB_SELECTORS.BACK_MENU_ICON).click();
  //   await this.page.getByText(WEB_SELECTORS.PROFILE_TAB).click();
  //   await this.page.getByTestId(WEB_SELECTORS.LOGOUT_BUTTON).click();
  // }
}
