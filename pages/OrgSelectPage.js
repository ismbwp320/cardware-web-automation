import { expect } from "@playwright/test";

export class OrgSelectPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.locationOption = () => page
      .locator("div")
      .filter({ hasText: /^St\. Louis, MO$/ })
      .nth(3)

    this.orgHeading = (orgName) =>
      page.getByRole("heading", { name: orgName, exact: true });
  }

  async gotoHome() {
    await this.page.goto("/home");
    await expect(this.page).toHaveURL(/home/i);
  }

  async changeOrganization( orgName) {
    // Wait for the org selector area to be visible
    await expect(this.locationOption()).toBeVisible();

    await this.locationOption().click();

    await expect(this.orgHeading(orgName)).toBeVisible();
    await this.orgHeading(orgName).click();

    // Wait for navigation/state update
    await this.page.waitForLoadState("networkidle");
  }
}




// import { expect } from "@playwright/test";
// import { CatalystConfig } from "../config";
// import path from "path";
// import fs from "fs";

// const authFile = path.join(__dirname, `../${CatalystConfig.AUTH_FILE}`);
// const orgFile = path.join(__dirname, `../${CatalystConfig.ORG_FILE}`);

// export class OrgSelectPage {
//   constructor(page) {
//     this.page = page;
//   }

//   async changeOrganization() {
//     await this.page.context().storageState({ path: authFile });
//       const storageState = JSON.parse(fs.readFileSync(authFile, "utf-8"));
//       const state = storageState?.origins;
//       const baseURL = state.length > 0 && state[0].origin;

//     await this.page.goto(`${baseURL}/home`);

//     await this.page.waitForTimeout(7000);
//     await this.page
//       .locator("div")
//       .filter({ hasText: /^St\. Louis, MO$/ })
//       .nth(3)
//       .click();
//     await this.page.waitForTimeout(2000);
//     await this.page.getByRole("heading", { name: "720 Hub Dev" }).click();
//     await this.page.waitForTimeout(2000);
//     await this.page.context().storageState({ path: orgFile });
//     await this.page.waitForTimeout(5000);
//   }
// }