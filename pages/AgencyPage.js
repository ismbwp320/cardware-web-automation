import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class AgencyPage {
  constructor(page) {
    this.page = page;
  }

  get sidebar() {
    return this.page.getByTestId("sidebar_container").last();
  }
  async navigateToAgency() {
    // await this.page.waitForTimeout(3000);
    // // await this.page.getByText('Agencies').nth(4).click();
    // await this.page.locator("div").getByText("Agencies").nth(6).click();

    const orgNav = this.sidebar.getByTestId("nav_item_agency_list");
    await orgNav.waitFor({ state: "visible", timeout: 3000 });
    await orgNav.click();
  }

  async searchAgency(categoryName) {
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Search$/ })
      .nth(2)
      .click();
    await this.page.locator("#field-61-input").fill("test");
    await this.page.waitForTimeout(1000);
    await this.page.locator("#field-61-input").press("Enter");
    await this.page.waitForTimeout(1000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Search$/ })
      .nth(2)
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.locator("#field-143-input").fill("");
    await this.page.locator("#field-143-input").press("Enter");
    await this.page.waitForTimeout(1000);
  }

  async paginationFlow() {
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("button", { name: "Select Results Per Page" })
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.locator("div").filter({ hasText: /^7$/ }).nth(1).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Select Page" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Select Page" }).click();
    await this.page.waitForTimeout(1000);
  }

  async addAgency() {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Add Agency" }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole("button", { name: "Close" }).click();
    await this.page.waitForTimeout(2000);
  }
}

// await page.getByText('Agencies').click();
