import { expect } from "@playwright/test";
import path from "path";
import { clickOnceVisible } from "../utils/common";
const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class DealershipsPage {
  constructor(page) {
    this.page = page;
  }

  get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }

  async navigateToDealerships() {
    const dealershipsNav = this.sidebar.getByTestId("nav_item_dealerships");
    await clickOnceVisible(dealershipsNav, 1000);
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByTestId("page_header_dealerships")).toBeVisible({ timeout: 5000 });
  }

  async searchDealerships(orgName) {
    const dealerShipContainer = this.page.getByTestId(
      "dealership_page_container",
    );
    const searchBox = dealerShipContainer.getByTestId("search_input");
    await expect(searchBox).toBeVisible({ timeout: 3000 });
    await searchBox.fill(orgName);
    await searchBox.press("Enter");
    await searchBox.fill("");
    await searchBox.press("Enter");
    const sortButton = dealerShipContainer.getByTestId("sort_order_button");
    await clickOnceVisible(sortButton, 1000);
    const recentUpdatedButton = this.page.getByTestId("sort_order_menu_item_recent_updated");
    await clickOnceVisible(recentUpdatedButton, 1000);
    await clickOnceVisible(sortButton, 1000);
    const oldestUpdatedButton = this.page.getByTestId("sort_order_menu_item_oldest_updated");
    await clickOnceVisible(oldestUpdatedButton, 1000);
  }

  async searchLMAOrganizations(orgName) {
    await this.page.waitForTimeout(1000);
    const dealerShipContainer = this.page.getByTestId(
      "dealership_page_container",
    );
    const lmaOrgTab = dealerShipContainer.getByTestId("tab_label_lma_organizations");
    await clickOnceVisible(lmaOrgTab, 1000);
    const searchBox = dealerShipContainer.getByTestId("search_input");
    await expect(searchBox).toBeVisible({ timeout: 3000 });
    await searchBox.fill(orgName);
    await searchBox.press("Enter");
    await searchBox.fill("");
    await searchBox.press("Enter");
    await this.page.waitForTimeout(2000);
  }
}
