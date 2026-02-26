import path from "path";
import { clickOnceVisible } from "../utils/common";
import { expect } from "@playwright/test";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class FilesPage {
  constructor(page) {
    this.page = page;
  }

   get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }
  async navigateToFiles() {
    const filesNav = this.sidebar.getByTestId("nav_item_files");
    await clickOnceVisible(filesNav);
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_files")).toBeVisible({ timeout: 10000 });
  }

  async refreshFilesPage() {
    const refreshButton = this.page.getByRole('button').filter({ hasText: '' });
    await clickOnceVisible(refreshButton);
    // await this.page.getByRole('button').filter({ hasText: '' }).isVisible();
    // await this.page.getByRole('button').filter({ hasText: '' }).click();
    await this.page.waitForLoadState("networkidle");
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