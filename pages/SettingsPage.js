import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class SettingsPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSettings() {
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').getByText('Settings').nth(4).click();
  }

  async navigateToCategories() {
    await this.page.waitForTimeout(2000);
    await this.page.locator('div').filter({ hasText: /^CategoriesManage expense categories for your organization$/ }).nth(1).isVisible();
    await this.page.locator('div').filter({ hasText: /^CategoriesManage expense categories for your organization$/ }).nth(1).click();
    await this.page.waitForTimeout(2000);
  }

  async refreshCategoriesPage() {
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('button').filter({ hasText: '' }).click();
    await this.page.waitForTimeout(3000);
  }

  async searchCategory(categoryName) {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Search' }).click();
    await this.page.getByRole('textbox', { name: 'Search' }).fill(categoryName);
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('textbox', { name: 'Search' }).click();
    await this.page.getByRole('textbox', { name: 'Search' }).fill("");
  }

  async applyFilters(){
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox').nth(1).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.waitForTimeout(1000);
  }

  async addCategory(categoryName) {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: ' Add' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.waitForTimeout(2000);
  }
}



  
  
