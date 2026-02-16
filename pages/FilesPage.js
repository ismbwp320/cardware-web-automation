import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class FilesPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToFiles() {
    await this.page.waitForTimeout(3000);
    await this.page.locator('div').getByText('Files').nth(3).click();
  }

  async refreshFilesPage() {
    await this.page.getByRole('button').filter({ hasText: '' }).isVisible();
    await this.page.getByRole('button').filter({ hasText: '' }).click();
    await this.page.waitForTimeout(3000);
  }

  async openFilePreview() {
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button').nth(1).isVisible();
    await this.page.getByRole('button').nth(1).click();
    await this.page.getByRole('button').filter({ hasText: '' }).click();
    await this.page.waitForTimeout(3000);
  }
}