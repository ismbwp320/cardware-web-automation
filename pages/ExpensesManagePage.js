import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class ExpenseManagePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToExpenseManagement() {
    await this.page.waitForTimeout(3000);
    await this.page
      .locator("div")
      .getByText("Expense Management")
      .nth(2)
      .click();
  }

  async searchWithFilters(orgName) {
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Search$/ })
      .first()
      .click();
    // await this.page
    //   .locator("div")
    //   .filter({ hasText: /^Search$/ })
    //   .first()
    //   .fill(orgName);
    await this.page.waitForTimeout(1000);
    // await this.page
    //   .locator("div")
    //   .filter({ hasText: /^Search$/ })
    //   .first()
    //   .press("Enter");
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Expense Type$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("menuitem", { name: "Reimbursement" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Status$/ })
      .nth(2)
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("menuitem", { name: "Submitted Pending" })
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Internal Status$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("menuitem", { name: "Internal Submitted Pending" })
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Organization$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("dialog").getByText("720 Hub Demo").click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Close" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Category$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Close" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Sort By$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("menuitem", { name: "Date", exact: true })
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Sort Order$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("menuitem", { name: "Oldest" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Cutoff Filters$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("menuitem", { name: "Reimbursement Cutoff" })
      .click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Include Test Data$/ })
      .nth(1)
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText("Clear Filters").click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Show: 50$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("menuitem", { name: "25" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button").filter({ hasText: "" }).click();
    await this.page.waitForTimeout(1000);
  }

  async addLedgerAdjustment(orgName) {
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("button", { name: "Add Ledger Adjustment" })
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Close" }).click();
    await this.page.waitForTimeout(1000);
  }

  async addExpense() {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Add Expense" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({
        hasText: /^ReimbursementSubmit expenses for company reimbursement$/,
      })
      .nth(1)
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button").filter({ hasText: "" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Add Expense" }).click();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Direct PayCompany pays vendor directly$/ })
      .nth(1)
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button").filter({ hasText: "" }).click();
    await this.page.waitForTimeout(1000);
  }
}

