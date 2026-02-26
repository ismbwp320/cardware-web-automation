import { expect } from "@playwright/test";
import path from "path";
import { clickOnceVisible } from "../utils/common";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class ExpenseManagePage {
  constructor(page) {
    this.page = page;
  }

  get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }

  async navigateToExpenseManagement() {
    const expenseManageNav = this.sidebar.getByTestId("nav_item_expense_management");
    await clickOnceVisible(expenseManageNav);
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_expenses")).toBeVisible({ timeout: 5000 });
  }

  async searchWithFilters(orgName) {
    const expenseManageContainer = this.page.getByTestId(
      "expenses_page_container",
    );
    await expect(expenseManageContainer).toBeVisible({ timeout: 3000 });
    const searchInput = expenseManageContainer.getByTestId("expenses_search_input");
    await expect(searchInput).toBeVisible({ timeout: 3000 });
    await searchInput.fill(orgName);
    await searchInput.press("Enter");
    await this.page.waitForTimeout(1000);
    await searchInput.fill("");
    await searchInput.press("Enter");
    await this.page.waitForTimeout(1000);

    await this.page
      .locator("div")
      .filter({ hasText: /^Expense Type$/ })
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    const reimbursementOption = await this.page.getByTestId("expenses_type_menu_item_all")
    await clickOnceVisible(reimbursementOption, 1000);
    // await this.page.getByRole("menuitem", { name: "Reimbursement" }).click();
    await this.page.waitForTimeout(1000);
    const statusFilter = this.page.getByTestId("expenses_status_input");
    await clickOnceVisible(statusFilter, 1000);
    const submittedPendingOption = this.page.getByTestId("expenses_status_menu_item_submitted_pending");
    await clickOnceVisible(submittedPendingOption, 1000);
    const internalStatusFilter = this.page.getByTestId("expenses_internal_status");
    await clickOnceVisible(internalStatusFilter, 1000);
    const internalSubmittedPendingOption = this.page.getByTestId("expenses_internal_status_menu_item_internal_submitted_pending");
    await clickOnceVisible(internalSubmittedPendingOption, 1000);
    const organizationFilter = this.page.getByTestId("expenses_organization_selector");
    await clickOnceVisible(organizationFilter, 1000);
    const organizationOption = this.page.getByTestId("organization_item_720_hub_demo").first();
    await clickOnceVisible(organizationOption, 1000);
    const selectButton = this.page.getByTestId("button_select").first();
    await clickOnceVisible(selectButton, 1000);
    // await this.page.getByRole("button", { name: "Close" }).click();
    await this.page.waitForTimeout(1000);
    const categoryFilter = this.page.getByTestId("expenses_category_selector_all");
    await clickOnceVisible(categoryFilter, 1000);
    // const selectButton2 = this.page.getByTestId("button_select");
    // await clickOnceVisible(selectButton2, 1000);
    const closeFilterButton = this.page.getByRole("button", { name: "Close" });
    await clickOnceVisible(closeFilterButton, 1000);
    const sortByFilter = this.page.getByTestId("expenses_sort_by_selector");
    await clickOnceVisible(sortByFilter, 1000);
    const dateOption = this.page.getByTestId("expenses_sort_by_menu_item_date");
    await clickOnceVisible(dateOption, 1000);
    const sortOrderFilter = this.page.getByTestId("expenses_sort_order_selector_recent");
    await clickOnceVisible(sortOrderFilter, 1000);
    const recentOption = this.page.getByTestId("expenses_sort_order_menu_item_recent");
    await clickOnceVisible(recentOption, 1000);
    const cutoffFilter = this.page.getByTestId("expenses_cutoff_filters_selector_all");
    await clickOnceVisible(cutoffFilter, 1000);
    const reimbursementCutoffOption = this.page.getByTestId("expenses_cutoff_filters_menu_item_reimbursement_cutoff");
    await clickOnceVisible(reimbursementCutoffOption, 1000);
    const includeTestDataFilter = this.page.getByTestId("expenses_include_test_data_checkbox");
    await clickOnceVisible(includeTestDataFilter, 1000);
    const clearFiltersButton = this.page.getByTestId("clear_filters_button");
    await clickOnceVisible(clearFiltersButton, 1000);
    const show50Filter = this.page.getByTestId("results_per_page_button_50");
    await clickOnceVisible(show50Filter, 1000);
    const show25Option = this.page.getByTestId("results_per_page_menu_item_25");
    await clickOnceVisible(show25Option, 1000);
    const selectPageButton = this.page.getByTestId("page_select_button_1");
    await clickOnceVisible(selectPageButton, 1000);
    const page2Option = this.page.getByTestId("page_select_menu_item_2");
    await clickOnceVisible(page2Option, 1000);
    const nextPageButton = this.page.getByTestId("right_arrow_button");
    await clickOnceVisible(nextPageButton, 1000);
    await this.page.waitForTimeout(1000);
  }

  async addLedgerAdjustment(orgName) {
    await this.page.waitForTimeout(1000);
    const addLedgerAdjustmentButton = this.page.getByRole("button", { name: "Add Ledger Adjustment" })
    await clickOnceVisible(addLedgerAdjustmentButton, 1000);
    const closeButton = this.page.getByRole("button", { name: "Close" });
    await clickOnceVisible(closeButton, 1000);
  }

  async addExpense() {
    await this.page.waitForTimeout(1000);
      const addExpenseButton = this.page.getByRole("button", { name: "Add Expense" });
      await clickOnceVisible(addExpenseButton, 1000);
    const reimbursementOption = this.page.getByTestId("reimbursement_option");
    await clickOnceVisible(reimbursementOption, 1000);
    const modalCloseButton = this.page.getByRole("button").filter({ hasText: "" });
    await clickOnceVisible(modalCloseButton, 1000);
    await clickOnceVisible(addExpenseButton, 1000);
    const directPayOption = this.page.getByTestId("direct_pay_option");
    await clickOnceVisible(directPayOption, 1000);
    await this.page.getByRole("button").filter({ hasText: "" }).click();
    await clickOnceVisible(modalCloseButton, 1000);
    await this.page.waitForTimeout(1000);
  }

  async addExpenseReimbursementflow() {
    await this.page.waitForTimeout(1000);
    const addExpenseButton = this.page.getByRole("button", { name: "Add Expense" });
    await clickOnceVisible(addExpenseButton, 1000);

    const reimbursementOption = this.page.getByTestId("reimbursement_option");
    await clickOnceVisible(reimbursementOption, 1000);

    const expenseNameInput = this.page.getByRole("textbox", { name: "Expense Name" });
    await this.page.getByRole("textbox", { name: "Expense Name" }).fill("test expense");
    
    const descriptionInput = this.page.getByRole("textbox", { name: "Description" });
    await descriptionInput.fill("test description 1");

    const categoryInput = this.page.getByRole("textbox", { name: "Select Category" });
    await clickOnceVisible(categoryInput, 1000);

    const categoryOption = this.page.getByText("Auto shows").last();
    await clickOnceVisible(categoryOption, 1000);

    const selectButton = this.page.getByRole("button", { name: "Select", exact: true });
    await clickOnceVisible(selectButton, 1000);

    const organizationInput = this.page.getByRole("textbox", { name: "Select Organization" });
    await clickOnceVisible(organizationInput, 1000);

    const organizationOption = this.page.getByText("Hub Dev").last();
    await clickOnceVisible(organizationOption, 1000);

    await clickOnceVisible(selectButton, 1000);

    const dealershipInput = this.page.getByRole("textbox", { name: "Select Dealership" });
    await clickOnceVisible(dealershipInput, 1000);

    const dealershipOption = this.page.getByText("Dealership").last();
    await clickOnceVisible(dealershipOption, 1000);

    await clickOnceVisible(selectButton, 1000);

    const payeeAddressInput = this.page.getByRole("textbox", { name: "Enter payee address" });
    await payeeAddressInput.fill("test payee address");

    const multiDealershipExpenseButton = this.page.getByRole("button", { name: " Multi Dealership Expense" });
    await clickOnceVisible(multiDealershipExpenseButton, 1000);

    const nextButton = this.page.getByRole("button", { name: " Next" });
    await clickOnceVisible(nextButton, 1000);

    const invoiceNumberInput = this.page.getByRole("textbox", { name: "Enter invoice number" });
    await invoiceNumberInput.fill("7689");

    const amountInput = this.page.getByRole("textbox", { name: "Enter amount" });
    await amountInput.fill("1234");

    const uploadReceiptButton = this.page.getByRole("button", { name: /Upload Receipt/i });
    await clickOnceVisible(uploadReceiptButton, 1000);
    const uploadReceiptInput = this.page.locator('input[type="file"]').last();
    await uploadReceiptInput.setInputFiles("screenshots/hub-dev.png");
    await this.page.waitForTimeout(1000);

    const uploadDocumentButton = this.page.getByRole("button", { name: /Upload Document/i })
    await clickOnceVisible(uploadDocumentButton, 1000);
    const uploadDocumentInput = this.page.locator('input[type="file"]').last();
    await uploadDocumentInput.setInputFiles("screenshots/hub-dev.png");
    await this.page.waitForTimeout(1000);

    await clickOnceVisible(nextButton, 1000);

    const chooseImageButton = this.page.getByRole("button", { name: /Choose Image/i });
    await clickOnceVisible(chooseImageButton, 1000);

    const chooseImageInput = this.page.locator('input[type="file"]').last();
    await chooseImageInput.setInputFiles("screenshots/hub-dev.png");
    await this.page.waitForTimeout(1000);

    const backButton = this.page.getByRole("button").filter({ hasText: "" })
    await clickOnceVisible(backButton, 1000);
    const backButton2 = this.page.getByRole("button").filter({ hasText: "" });
    await clickOnceVisible(backButton2, 1000);
    const closeButton = this.page.getByRole("button").filter({ hasText: "" });
    await clickOnceVisible(closeButton, 1000);
    await this.page.waitForTimeout(3000);
  }


  async addExpenseDirectPayflow() {
    await this.page.waitForTimeout(3000);
    const addExpenseButton = this.page.getByRole("button", { name: "Add Expense" });
    await clickOnceVisible(addExpenseButton, 1000);
    // await this.page.getByRole("button", { name: "Add Expense" }).click();
    // await this.page.waitForTimeout(1000);

  const directPayOption = this.page.getByTestId("direct_pay_option");
    await clickOnceVisible(directPayOption, 1000);
  // await this.page.locator('div').filter({ hasText: /^Direct PayCompany pays vendor directly$/ }).nth(1).click();
  // await this.page.waitForTimeout(1000);
  const expenseNameInput = this.page.getByRole('textbox', { name: 'Expense Name' });
  
  // await this.page.getByRole('textbox', { name: 'Expense Name' }).click();
  // await this.page.waitForTimeout(1000);
  await expenseNameInput.fill('test expense 1');
  await this.page.waitForTimeout(1000);

  const descriptionInput = this.page.getByRole('textbox', { name: 'Description' });
  // await this.page.getByRole('textbox', { name: 'Description' }).click();
  // await this.page.waitForTimeout(1000);
  await descriptionInput.fill('test description 1');
  await this.page.waitForTimeout(1000);

  const categoryInput = this.page.getByRole('textbox', { name: 'Select Category' });
  await clickOnceVisible(categoryInput, 1000);
  // await this.page.getByRole('textbox', { name: 'Select Category' }).click();
  // await this.page.waitForTimeout(1000);
  // await this.page.getByText('Auto shows').nth(2).click();
  const categoryOption =  this.page.getByText('Auto shows').nth(4);
  await clickOnceVisible(categoryOption, 1000);
  // await this.page.getByText('Auto shows').nth(4).click();
  // await this.page.waitForTimeout(1000);
  const selectCategoryButton = this.page.getByRole('button', { name: 'Select', exact: true })
  await clickOnceVisible(selectCategoryButton, 1000);
  // await this.page.getByRole('button', { name: 'Select', exact: true }).click();
  // await this.page.waitForTimeout(1000);
  const organizationInput = this.page.getByRole('textbox', { name: 'Select Organization' });
  await clickOnceVisible(organizationInput, 1000);
  // await this.page.getByRole('textbox', { name: 'Select Organization' }).click();
  // await this.page.waitForTimeout(1000);
  // await this.page.getByText('720 Hub Dev').nth(4).click();
  // await this.page.getByText("Hub Dev").nth(5).click();
  await this.page.waitForTimeout(5000);
  // await this.page.getByRole('button', { name: 'Select', exact: true }).click();
  // await this.page.waitForTimeout(1000);
  const dealershipInput = this.page.getByRole('textbox', { name: 'Select Dealership' });
  // await this.page.getByRole('textbox', { name: 'Select Dealership' }).click();
  await clickOnceVisible(dealershipInput, 1000);
  const dealershipOption = this.page.getByText('Dealership').nth(1);
  // await clickOnceVisible(dealershipOption, 1000);

  // await this.page.getByText('Dealership').nth(1).click();
  // await this.page.waitForTimeout(1000);
  const selectDealershipButton = this.page.getByRole('button', { name: 'Select', exact: true })
  await clickOnceVisible(selectDealershipButton, 1000);
  // await this.page.getByRole('button', { name: 'Select', exact: true }).click();
  // await this.page.waitForTimeout(1000);

  const payeeNameInput = this.page.getByRole('textbox', { name: 'Enter name of payee' }); 
  // await this.page.getByRole('textbox', { name: 'Enter name of payee' }).click();
  // await this.page.waitForTimeout(1000);
  await payeeNameInput.fill('test payee');
  await this.page.waitForTimeout(1000);
  const payeeAddressInput = this.page.getByRole('textbox', { name: 'Enter payee address' });
  // await this.page.getByRole('textbox', { name: 'Enter payee address' }).click();
  // await this.page.waitForTimeout(1000);
  await payeeAddressInput.fill('test payee address');
  await this.page.waitForTimeout(1000);
  const multiDealershipExpenseButton = this.page.getByRole('button', { name: ' Multi Dealership Expense' });
  await clickOnceVisible(multiDealershipExpenseButton, 1000);
  // await this.page.getByRole('button', { name: ' Multi Dealership Expense' }).click();
  // await this.page.waitForTimeout(1000);
  const nextButton = this.page.getByRole('button', { name: ' Next' });
  await clickOnceVisible(nextButton, 1000);
  // await this.page.getByRole('button', { name: ' Next' }).click();
  // await this.page.waitForTimeout(1000); 
  const amountInput = this.page.getByRole('textbox', { name: 'Enter amount' });
  // await this.page.getByRole('textbox', { name: 'Enter amount' }).click();
  // await this.page.waitForTimeout(1000);
  await amountInput.fill('1234');
  await this.page.waitForTimeout(1000);
  const uploadDocumentButton = this.page.getByRole("button", { name: /Upload Document/i });
  this.page.getByRole("button", { name: /Upload Document/i })
  // await this.page.getByRole("button", { name: /Upload Document/i }).click();
    // await this.page.waitForTimeout(1000);
    const chooseImageInput = this.page.locator('input[type="file"]').last();
    await chooseImageInput.setInputFiles("screenshots/hub-dev.png");
  // await this.page.getByRole('button', { name: ' Upload Document' }).click();
  // await this.page.waitForTimeout(1000);
  // await this.page.getByRole('button', { name: ' Upload Document' }).setInputFiles('screenshots/hub-dev.png');
  await this.page.waitForTimeout(1000);
  const nextButton2 = this.page.getByRole('button', { name: ' Next' });
  await clickOnceVisible(nextButton2, 1000);
  // await this.page.getByRole('button', { name: ' Next' }).click();
  // await this.page.waitForTimeout(1000);
  

  // await this.page.getByRole('button', { name: ' Choose Image' }).click();

  // await this.page.getByRole('button', { name: ' Choose Image' }).setInputFiles('hub-dev.png');
  const backButton = this.page.getByRole('button').filter({ hasText: '' });
  await clickOnceVisible(backButton, 1000);
  // await this.page.getByRole('button').filter({ hasText: '' }).click();
  // await this.page.waitForTimeout(1000);
  const backButton2 = this.page.getByRole('button').filter({ hasText: '' });
  await clickOnceVisible(backButton2, 1000);
  // await this.page.getByRole('button').filter({ hasText: '' }).click();
  // await this.page.waitForTimeout(1000);
  const closeButton = this.page.getByRole('button').filter({ hasText: '' });
  await clickOnceVisible(closeButton, 1000);
  // await this.page.getByRole('button').filter({ hasText: '' }).click();
  await this.page.waitForTimeout(3000);

  }
}