import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToFinancialTracking() {
    await this.page.getByText("Hub Dev").nth(1).click();
    const page1Promise = this.page.waitForEvent("popup");
    await this.page
      .locator("div")
      .filter({ hasText: /^financial_tracking$/ })
      .first()
      .click();
    // const page1 = await page1Promise;
    // await page1.goto(
    //   "https://expense-ui-414587549738.us-central1.run.app/lma-analytics",
    // );
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(6000);
    await this.page.context().storageState({ path: cafFile });
  }

  async verifyCAFDashboard() {
    // await this.page.goto(`${baseURL}`);
    await this.page.waitForTimeout(3000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Dashboard$/ })
      .first()
      .isVisible();
    await this.page.waitForTimeout(3000);

    await this.page
      .locator("div")
      .filter({ hasText: /^Dashboard$/ })
      .nth(1)
      .click();
    await this.page.waitForTimeout(3000);
  }

  async tabsNavigationCAF() {
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').filter({ hasText: /^Dashboard$/ }).nth(1).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').filter({ hasText: /^Organizations$/ }).nth(1).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').filter({ hasText: /^Dealerships$/ }).nth(4).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').getByText('Expense Management').nth(2).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').getByText('Files').nth(3).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').getByText('Settings').nth(4).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').getByText('Agency Expenses').nth(5).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').getByText('Agencies').nth(6).click();
    await this.page.waitForTimeout(3000);
  }
}


