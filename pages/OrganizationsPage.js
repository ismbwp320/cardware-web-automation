import path from "path";

const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

export class OrganizationsPage {
  constructor(page) {
    this.page = page;
  }

  async navigationToOrganizations() {
    await this.page.waitForTimeout(3000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Organizations$/ })
      .nth(1)
      .click();
  }

  async searchOrganization(orgName) {
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
  }

  async addOrganization(orgName) {
    await this.page.getByRole("button", { name: " Add" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("button", { name: "Close" }).click();
    await this.page.waitForTimeout(1000);
  }
}
