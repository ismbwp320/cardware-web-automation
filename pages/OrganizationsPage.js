import { expect } from "@playwright/test";
import path from "path";
import { clickOnceVisible } from "../utils/common";
const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class OrganizationsPage {
  constructor(page) {
    this.page = page;
  }
  get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }
  async navigationToOrganizations() {
    const orgNav = this.sidebar.getByTestId("nav_item_organizations");
    // await orgNav.waitFor({ state: "visible", timeout: 3000 });
    // await orgNav.click();
    await clickOnceVisible(orgNav, 1000);
    
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_organizations")).toBeVisible({ timeout: 5000 });
  }

  async searchOrganization(orgName) {
    const searchBox = this.page.getByTestId("search_input").first();
    await expect(searchBox).toBeVisible({ timeout: 3000 });
    await searchBox.click();
    await searchBox.fill(orgName);
    await this.page.waitForTimeout(1000);
    await searchBox.press("Enter");
    await searchBox.click();
    await searchBox.fill("");
    await searchBox.press("Enter");
    await this.page.waitForTimeout(1000);
  }

  async addOrganization(orgName) {
    const addOrganizationButton = this.page.getByTestId(
      "add_organization_button",
    );
    await expect(addOrganizationButton).toBeVisible({ timeout: 3000 });
    await addOrganizationButton.click();
    await this.page.waitForTimeout(1000);
    const modalCloseButton = this.page.getByRole("button", { name: "Close" });
    await expect(modalCloseButton).toBeVisible({ timeout: 3000 });
    await modalCloseButton.click();
    await this.page.waitForTimeout(1000);
  }
}
