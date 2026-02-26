import { expect } from "@playwright/test";

export class OrgSelectPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.locationOption = () => page
      .locator("div")
      .filter({ hasText: /^720 Hub Demo Production$/ })
      .nth(3)
    // this.locationOption = () => page
    //   .locator("div")
    //   .filter({ hasText: /^St\. Louis, MO$/ })
    //   .nth(3)

    this.orgHeading = (orgName) =>
      page.getByRole("heading", { name: "720 Hub Dev", exact: true });
  }

  async gotoHome() {
    await this.page.goto("/home");
    await expect(this.page).toHaveURL(/home/i);
  }

  async changeOrganization( orgName) {
    await this.page.waitForTimeout(5000);
    await this.locationOption().click();

    await expect(this.orgHeading(orgName).first()).toBeVisible();
    await this.orgHeading(orgName).first().click();

    // Wait for navigation/state update
    await this.page.waitForLoadState("networkidle");
  }

  async navigateToCAF(){
    await this.page.locator('div').filter({ hasText: /^Community Funds Beta$/ }).nth(1).click();
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(10000);
  }
}