import path from "path";
import { clickOnceVisible } from "../utils/common";
import { expect } from "@playwright/test";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class SettingsPage {
  constructor(page) {
    this.page = page;
  }

    get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }
  async navigateToSettings() {
    const settingsNav = this.sidebar.getByTestId("nav_item_settings");
    await clickOnceVisible(settingsNav, 1000);
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_settings")).toBeVisible({ timeout: 3000 });
  }

  async navigateToCategories() {
    await this.page.waitForTimeout(2000);
    const categoriesNav = this.page.getByTestId("settings_card_categories_title");
    await clickOnceVisible(categoriesNav, 3000);
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_categories")).toBeVisible({ timeout: 5000 });
  }

  async refreshCategoriesPage() {
    const refreshButton = this.page.getByRole('button').filter({ hasText: '' });
    await clickOnceVisible(refreshButton, 3000);
    await this.page.waitForLoadState("networkidle");
  }

  async searchCategory(categoryName) {
    await this.page.waitForTimeout(1000);
    const searchBox = this.page.getByTestId("categories_search_input");
    await searchBox.fill(categoryName);
    await this.page.waitForTimeout(2000);
    await searchBox.fill("");
  }

  async applyFilters(){
    await this.page.waitForTimeout(1000);
    const filterButton = this.page.getByTestId("select_organization_button");
    await clickOnceVisible(filterButton, 1000);
    const filterOption = this.page.getByRole('button', { name: 'Close' });
    await clickOnceVisible(filterOption, 1000);
  }

  async addCategory(categoryName) {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: ' Add' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.waitForTimeout(2000);
  }
}



  
  
