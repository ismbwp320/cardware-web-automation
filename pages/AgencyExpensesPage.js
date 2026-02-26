import path from "path";
import { clickOnceVisible } from "../utils/common";
import { expect } from "@playwright/test";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class AgencyExpensesPage {
  constructor(page) {
    this.page = page;
  }
   get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }
  async navigateToAgencyExpenses() {
    await this.page.waitForTimeout(5000);
    const agencyExpensesNav = this.sidebar.getByTestId("nav_item_agency_expenses");
    await clickOnceVisible(agencyExpensesNav, 1000);
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_agency_expenses")).toBeVisible({ timeout: 3000 });
  }


  async searchExpenses(categoryName) {
    await this.page.waitForTimeout(1000);
    const searchBox = this.page.getByTestId("group_expenses_search_input");
    await searchBox.fill(categoryName);
    await searchBox.press("Enter");
    await searchBox.fill("");
    await searchBox.press("Enter");
  }

  async applyFilters() {
    const modalContainer = this.page.getByTestId("select_organization_modal");
    const filterButton = this.page.getByTestId("select_organization_button");
    await clickOnceVisible(filterButton, 1000);
    const OrgOption = modalContainer.getByTestId("organization_item_arizona").first();
    await clickOnceVisible(OrgOption, 3000);
    const selectButton = this.page.getByRole("button", { name: "Close" });
    await clickOnceVisible(selectButton, 1000);
  }

  async paginationFlow() {
    const selectResultsButton = this.page.getByRole("button", { name: "Select Results Per Page" });
    await clickOnceVisible(selectResultsButton, 1000);
    const optio7 = this.page.getByRole("menuitem", { name: "7", exact: true });
    await clickOnceVisible(optio7, 1000);

    const selectPageButton = this.page.getByRole("button", { name: "Select Page" });
    await clickOnceVisible(selectPageButton, 1000);
    // await this.page.waitForTimeout(1000);
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