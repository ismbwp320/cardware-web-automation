import { expect } from "@playwright/test";

export class OrgSelectPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.locationOption = () => page
      .locator("div")
      .filter({ hasText: /^St\. Louis, MO$/ })
      .nth(3)

    this.orgHeading = (orgName) =>
      page.getByRole("heading", { name: orgName, exact: true });
  }

  async gotoHome() {
    await this.page.goto("/home");
    await expect(this.page).toHaveURL(/home/i);
  }

  async changeOrganization( orgName) {
    await this.page.waitForTimeout(5000);
    await this.locationOption().click();

    await expect(this.orgHeading(orgName)).toBeVisible();
    await this.orgHeading(orgName).click();

    // Wait for navigation/state update
    await this.page.waitForLoadState("networkidle");
  }
}