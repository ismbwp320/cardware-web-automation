import { test as setup, expect } from "@playwright/test";
import { OrgSelectPage } from "../../pages/OrgSelectPage.js";
import path from "path";

const authFile = path.join(process.cwd(), "playwright/.auth/auth.json");
const orgFile = path.join(process.cwd(), "playwright/.auth/org.json");

setup.use({ storageState: authFile });

setup("setup: org selected", async ({ page }) => {
  const org = new OrgSelectPage(page);

  await org.gotoHome();
  await org.changeOrganization( "720 Hub Dev");

  await expect(page).toHaveURL(/home/i);

  await page.context().storageState({ path: orgFile });
});
