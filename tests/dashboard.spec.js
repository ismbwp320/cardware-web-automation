
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { OrgSelectPage } from '../pages/OrgSelectPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';


test.describe('LMA Web Application', () => {
  // Declare variables for pages and components
  let page, login, org, dashboard ;


  let context;

  // ---------------------- SETUP ----------------------
 
  test.beforeAll(async ({ browser }) => {
    // Create a new browser context and page instance
    context = await createAuthenticatedContext(browser);
    const page = await context.newPage();
    
     // Initialize all page objects
    login = new LoginPage(page);
    // org = new OrgSelectPage(page);
    dashboard = new DashboardPage(page);
  });
  

  // ---------------------- TEST CASE #1 ----------------------
  
  test('Navigate to Financial Tracking', async () => {  
    await dashboard.navigateToFinancialTracking();
  });


  test('Navigate to CAF', async () => {  
    await dashboard.verifyCAFDashboard();
  });

  
  test('CAF tabs Navigation', async () => {  
    await dashboard.tabsNavigationCAF();
  });
  

  test.afterAll(async () => {
    await context.close();
  });

});