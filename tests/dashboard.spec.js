import { test as base } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage.js';
import { createAuthenticatedContext } from '../utils/common.js';
import { CatalystConfig } from "../config";
import path from "path";

// const AUTH_FILE = path.join(__dirname, `../${CatalystConfig.AUTH_FILE}`);
const ORG_FILE = path.join(__dirname, `../${CatalystConfig.ORG_FILE}`);

// Extend the base test to make all tests run serially
const test = base.extend({});

test.describe.configure({ mode: 'serial' }); // <-- This forces serial execution
test.describe('LMA Web Application', () => {

  let page;
  let dashboard;
  let context;

  // ---------------------- SETUP ----------------------
  test.beforeAll(async ({ browser }) => {

    context = await createAuthenticatedContext(browser, ORG_FILE);

    page = await context.newPage();

    dashboard = new DashboardPage(page);
    await dashboard.page.goto('/')
  });

  // ---------------------- TEST CASES ----------------------

  test('Navigate to Financial Tracking', async () => {
    await dashboard.navigateToFinancialTracking();
  });

  // test('Navigate to CAF', async () => {
  //   await dashboard.verifyCAFDashboard();
  // });

  // test('CAF tabs Navigation', async () => {
  //   await dashboard.tabsNavigationCAF();
  // });

  // ---------------------- TEARDOWN ----------------------
  test.afterAll(async () => {
    await context.close();
  });

});
