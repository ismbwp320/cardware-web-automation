import { expect } from "@playwright/test";

export class OrgSelectPage {
  constructor(page) {
    this.page = page;
  }

  async changeOrganization() {
    await this.page.waitForTimeout(7000);
    await this.page
      .locator("div")
      .filter({ hasText: /^St\. Louis, MO$/ })
      .nth(3)
      .click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole("heading", { name: "720 Hub Dev" }).click();
    await this.page.waitForTimeout(2000);
  }

  async navigateToFinancialTracking() {
    // await this.page
    //   .locator("div")
    //   .filter({ hasText: /^720 Hub Dev$/ })
    //   .nth(2)
    //   .click();
    await this.page.getByText("Hub Dev").nth(1).click();
    const page1Promise = this.page.waitForEvent("popup");
    await this.page
      .locator("div")
      .filter({ hasText: /^financial_tracking$/ })
      .first()
      .click();
    const page1 = await page1Promise;
    await page1.goto(
      "https://expense-ui-414587549738.us-central1.run.app/lma-analytics",
    );

    await this.page.waitForTimeout(6000);
  
  }
}
