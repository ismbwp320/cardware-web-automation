
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { OrgSelectPage } from '../pages/OrgSelectPage.js';


test.describe('LMA Web Application', () => {
  // Declare variables for pages and components
  let page, login, org ;

  // ---------------------- SETUP ----------------------
  test.beforeAll(async ({ browser }) => {
    // Create a new browser context and page instance
    const context = await browser.newContext();
    page = await context.newPage();

    // Initialize all page objects
    login = new LoginPage(page);
    org = new OrgSelectPage(page);
  });

  // ---------------------- TEST CASE #1 ----------------------
  test('Login Flow', async () => {

    // Step 1: Navigate to the application login page
    await login.goto();

    // Step 2: Perform user login
    if (!process.env.USERNAME || !process.env.PASSWORD) {
    throw new Error("USERNAME or PASSWORD is missing in environment variables");
  }     
    await login.login(process.env.USERNAME, process.env.PASSWORD);
  });

  // ---------------------- TEST CASE #2 ----------------------
  test('Home Page Flow', async () => {
    await org.changeOrganization();
  });

  // test('Navigate to Financial Tracking', async () => {  
  //   await org.navigateToFinancialTracking();
  // });
  // test('Navigate to CAF', async () => {  
  //   await org.verifyCAFDashboard();
  // });
  // test('CAF tabs Navigation', async () => {  
  //   await org.tabsNavigationCAF();
  // });

});