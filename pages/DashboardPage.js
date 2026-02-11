import { expect } from "@playwright/test";
import { CatalystConfig } from "../config";
import path from "path";
import fs from "fs";

const authFile = path.join(__dirname, `../${CatalystConfig.AUTH_FILE}`);
const orgFile = path.join(__dirname, `../${CatalystConfig.ORG_FILE}`);

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

    await this.page.waitForTimeout(6000);
  }

  
  async  verifyCAFDashboard(){
    await this.page.context().storageState({ path: orgFile });
      const storageState = JSON.parse(fs.readFileSync(orgFile, "utf-8"));
      const state = storageState?.origins;
      const baseURL = state.length > 0 && state[0].origin;
    await this.page.goto(`${baseURL}`);
    await this.page.waitForTimeout(8000);
    await this.page.locator("div")
      .filter({ hasText: /^Dashboard$/ })
      .first().isVisible();
    await this.page.waitForTimeout(7000);

    await this.page.locator('div').filter({ hasText: /^Dashboard$/ }).nth(1).click();
    await this.page.waitForTimeout(5000);
    await this.page.locator('div').filter({ hasText: /^Dealerships$/ }).nth(4).click();
  }

  async tabsNavigationCAF(){
    // await this.page.locator('div').filter({ hasText: /^Dashboard$/ }).nth(1).click();
    await this.page.waitForTimeout(5000);

  // await expect(this.page.getByText('Dashboard').nth(1)).toBeVisible();
  await this.page.locator('div').filter({ hasText: /^Dashboard$/ }).nth(1).click();
  await this.page.waitForTimeout(5000);
  // await this.page.locator('div').filter({ hasText: /^Organizations$/ }).nth(1).click();
  // await this.page.waitForTimeout(5000);
  // await expect(this.page.getByRole('row', { name: 'Indianapolis, IN' })).toBeVisible();

  await this.page.locator('div').filter({ hasText: /^Dealerships$/ }).nth(4).click();


    // await this.page.locator('div').filter({ hasText: /^Organizations$/ }).nth(1).click();
    // await this.page.waitForTimeout(5000);
    // await expect(this.page.getByRole('row', { name: 'Indianapolis, IN' })).toBeVisible();
    // await this.page.waitForTimeout(5000);
    // await this.page.locator('div').filter({ hasText: /^Dealerships$/ }).nth(4).click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.getByRole('row', { name: 'Dealer Name City State ID LMA' })).toBeVisible();
    
    await this.page.getByText('Expense Management').nth(2).click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.getByRole('row', { name: 'LMA Name Dealership Expense' })).toBeVisible();

    await this.page.getByText('Files').nth(3).click();
    await this.page.waitForTimeout(5000);
    await expect(this.page.getByRole('button').filter({ hasText: '' })).toBeVisible();

    await this.page.getByText('Settings').nth(4).click();
    await this.page.waitForTimeout(5000);
    await this.page.getByText('Agency Expenses').nth(5).click();
    await this.page.waitForTimeout(5000);
    // await expect(this.page.getByRole('row', { name: '691d4c38e3212a3a95af8b48 ' })).toBeVisible();

    // await this.page.locator('div:nth-child(7) > div > div > .css-175oi2r.r-1lm6u6.r-13awgt0 > .css-175oi2r.r-1lm6u6.r-1pi2tsx > div > .css-175oi2r.r-2o02ov > div:nth-child(15) > .css-175oi2r > .css-146c3p1').click();
    // await this.page.locator('div').filter({ hasText: /^Dashboard12 January 2026 - 11 February 2026ExportShare$/ }).nth(2).click();
  }
}
  // await expect(page1.getByRole('row', { name: 'Status # of Expenses Amount' })).toBeVisible();

  // await page1.locator('div').filter({ hasText: /^Dashboard$/ }).nth(1).click();
  // await page1.locator('div').filter({ hasText: /^Organizations$/ }).nth(1).click();
  // await expect(page1.getByRole('row', { name: 'Indianapolis, IN' })).toBeVisible();

  // await page1.locator('div').filter({ hasText: /^Dealerships$/ }).nth(4).click();
  // await expect(page1.getByRole('row', { name: 'Dealer Name City State ID LMA' })).toBeVisible();

  // await page1.getByText('Expense Management').nth(2).click();
  // await expect(page1.getByRole('row', { name: 'LMA Name Dealership Expense' })).toBeVisible();

  // await page1.getByText('Files').nth(3).click();
  // await expect(page1.getByRole('button').filter({ hasText: '' })).toBeVisible();

  // await page1.getByText('Settings').nth(4).click();
  // await page1.getByText('Agency Expenses').nth(5).click();
  // await expect(page1.getByRole('row', { name: '691d4c38e3212a3a95af8b48 ' })).toBeVisible();

  // await page1.locator('div:nth-child(7) > div > div > .css-175oi2r.r-1lm6u6.r-13awgt0 > .css-175oi2r.r-1lm6u6.r-1pi2tsx > div > .css-175oi2r.r-2o02ov > div:nth-child(15) > .css-175oi2r > .css-146c3p1').click();
  // await page1.locator('div').filter({ hasText: /^Dashboard12 January 2026 - 11 February 2026ExportShare$/ }).nth(2).click();

