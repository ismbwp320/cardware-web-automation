import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class AgencyExpensesPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToAgencyExpenses() {
    await this.page.waitForTimeout(3000);
    // await this.page.getByText('Agency Expenses').nth(2).click();
     await this.page.locator('div').getByText('Agency Expenses').nth(5).click();
  }


  async searchExpenses(categoryName) {
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Search$/ })
      .nth(2)
      .click();
    // await this.page
    //   .locator("div")
    //   .filter({ hasText: /^Search$/ })
    //   .nth(2).fill("Test");
    // await this.page
    //   .locator("div")
    //   .filter({ hasText: /^Search$/ })
    //   .nth(2)
    //   .press("Enter");
    // await this.page
    //   .locator("div")
    //   .filter({ hasText: /^Search$/ })
    //   .nth(2)
    //   .fill("");
  }

  async applyFilters() {
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Organization$/ })
      .nth(2)
      .click();
      await this.page.waitForTimeout(2000);
    await this.page.getByRole("button", { name: "Close" }).click();
    await this.page.waitForTimeout(1000);
  }

  async paginationFlow() {
    await this.page
      .getByRole("button", { name: "Select Results Per Page" })
      .click();
      await this.page.waitForTimeout(1000);
    await this.page.getByRole("menuitem", { name: "7", exact: true }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Select Page" }).click();
    await this.page.waitForTimeout(1000);
    // await this.page.getByRole("menuitem", { name: "2" }).click();
    // await this.page.getByRole("button").filter({ hasText: "" }).click();
  }

  async addGroupExpenseReimbursementFlow() {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Add Group Expense" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({
        hasText: /^ReimbursementSubmit expenses for company reimbursement$/,
      })
      .nth(4)
      .click();
      await this.page.waitForTimeout(1000);
    await this.page.getByRole("button").filter({ hasText: "" }).click();
    await this.page.waitForTimeout(2000);
  }
  async addGroupExpenseDirectPayFlow() {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Add Group Expense" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Direct PayCompany pays vendor directly$/ })
      .nth(4)
      .click();
      await this.page.waitForTimeout(1000);
    await this.page.getByRole("button").filter({ hasText: "" }).click();
    await this.page.waitForTimeout(2000);
  }
}