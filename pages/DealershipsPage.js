import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class DealershipsPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToDealerships() {
    await this.page.waitForTimeout(3000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Dealerships$/ })
      .nth(4)
      .click();
  }

  async searchDealerships(orgName) {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).click();
    await this.page.getByRole("textbox", { name: "Search" }).fill(orgName);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).press("Enter");
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).click();
    await this.page.getByRole("textbox", { name: "Search" }).fill("");
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).press("Enter");
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Recent Updated" }).click();
    await this.page.waitForTimeout(1000);
    //   await this.page.locator('div').filter({ hasText: /^Oldest Updated$/ }).nth(1).click();
    await this.page.getByRole("menuitem", { name: "Oldest Updated" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Oldest Updated" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("menuitem", { name: "Recent Updated" }).click();

    await this.page.waitForTimeout(1000);
  }

  async searchLMAOrganizations(orgName) {
    await this.page
      .locator("div")
      .filter({ hasText: /^LMA Organizations$/ })
      .nth(1)
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).click();
    await this.page.getByRole("textbox", { name: "Search" }).fill(orgName);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).press("Enter");
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search" }).fill("");
    await this.page.waitForTimeout(1000);
  }
}
