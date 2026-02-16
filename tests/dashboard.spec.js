import { test } from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage.js";
import path from "path";
import { LoginPage } from "../pages/LoginPage.js";
import { OrganizationsPage } from "../pages/OrganizationsPage.js";
import { DealershipsPage } from "../pages/DealershipsPage.js";
import { ExpenseManagePage } from "../pages/ExpensesManagePage.js";
import { FilesPage } from "../pages/FilesPage.js";
import { SettingsPage } from "../pages/SettingsPage.js";
import { AgencyExpensesPage } from "../pages/AgencyExpensesPage.js";
import { AgencyPage } from "../pages/AgencyPage.js";

// const orgFile = path.join(process.cwd(), "playwright/.auth/org.json");
const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

test.use({ storageState: cafFile });

let login, dashboard, organization, dealership, expenseManage, files, settings, agencyExpenses, agency;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  dashboard = new DashboardPage(page);
  organization = new OrganizationsPage(page);
  dealership = new DealershipsPage(page);
  expenseManage = new ExpenseManagePage(page);
  files = new FilesPage(page);
  settings = new SettingsPage(page);
  agencyExpenses = new AgencyExpensesPage(page);
  agency = new AgencyPage(page);
});

test("Navigate to Financial Tracking (already logged in + caf selected)", async ({
  page,
}) => {
  await page.goto(
    "https://expense-ui-414587549738.us-central1.run.app/lma-analytics",
  );
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(6000);
  await login.login(process.env.USERNAME, process.env.PASSWORD);
  await page.waitForTimeout(6000);
  await dashboard.verifyCAFDashboard();
  // await dashboard.tabsNavigationCAF();

  await organization.navigationToOrganizations();
  await organization.searchOrganization("Test Organization");
  await organization.addOrganization("Test Organization");

  await dealership.navigateToDealerships();
  await dealership.searchDealerships("Test");
  await dealership.searchLMAOrganizations("Test");

  await expenseManage.navigateToExpenseManagement();
  await expenseManage.searchWithFilters("Test");
  await expenseManage.addExpense();


  await files.navigateToFiles();
  await files.refreshFilesPage();
  await files.openFilePreview();


  
  await settings.navigateToSettings();
  // await settings.navigateToCategories();
  // await settings.refreshCategoriesPage();
  // await settings.searchCategory("Test");
  // await settings.applyFilters();
  // await settings.addCategory("Test");


  await agencyExpenses.navigateToAgencyExpenses();
  await agencyExpenses.searchExpenses("Test");
  await agencyExpenses.applyFilters();
  await agencyExpenses.paginationFlow();
  // await agencyExpenses.addGroupExpenseReimbursementFlow();
  // await agencyExpenses.addGroupExpenseDirectPayFlow();


  await agency.navigateToAgency();
  await agency.searchAgency();
  await agency.paginationFlow();
  await agency.addAgency();

});

// test("Verify CAF Dashboard and Navigation Tabs", async () => {
//   await dashboard.verifyCAFDashboard();
//   await dashboard.tabsNavigationCAF();
// });

// test("navigate to Organizations, Search and Add Organization", async () => {
//   await organization.navigationToOrganizations();
//   await organization.searchOrganization("Test Organization");
//   await organization.addOrganization("Test Organization");
// });
