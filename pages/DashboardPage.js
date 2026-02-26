import { expect } from "@playwright/test";
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
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_dashboard")).toBeVisible({ timeout: 5000 });
  }
  
  get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }

  async tabsNavigationCAF() {
    await this.sidebar.getByTestId("nav_item_dashboard").click();
    await this.page.waitForTimeout(3000);
    await this.sidebar.getByTestId("nav_item_organizations").click();
    await this.page.waitForTimeout(3000);
    await this.sidebar.getByTestId("nav_item_dealerships").click();
    await this.page.waitForTimeout(3000);
    await this.sidebar.getByTestId("nav_item_expense_management").click();
    await this.page.waitForTimeout(3000);
    await this.sidebar.getByTestId("nav_item_files").click();
    await this.page.waitForTimeout(3000);
    await this.sidebar.getByTestId("nav_item_settings").click();
    await this.page.waitForTimeout(3000);
    await this.sidebar.getByTestId("nav_item_agency_expenses").click();
    await this.page.waitForTimeout(3000);
    await this.sidebar.getByTestId("nav_item_agencies").click();
    await this.page.waitForTimeout(3000);
  }

  async navigateToTotalExpenses() {
    const totalExpenseCard = this.page.getByTestId("total_expenses_card");
    const totalExpensesIsVisible = await totalExpenseCard.isVisible();
    console.log("Total Expenses Card Visible:", totalExpensesIsVisible);
    if (totalExpensesIsVisible) {
      await totalExpenseCard.click();
      await this.page.waitForLoadState("networkidle");
      await this.page.waitForTimeout(3000);
    }
  }
}


