// import { test as setup, expect } from "@playwright/test";
// import path from "path";
// import { DashboardPage } from "../../pages/DashboardPage.js";

// const orgFile = path.join(process.cwd(), "playwright/.auth/org.json");
// // const cafFile = path.join(process.cwd(), "playwright/.auth/caf.json");

// setup.use({ storageState: orgFile });

// setup("setup: caf selected", async ({ page }) => {
//   const dashboard = new DashboardPage(page);
//   await page.goto("/home");

//   await expect(page).toHaveURL(/home/i);
//   await dashboard.navigateToFinancialTracking();

//   // await page.context().storageState({ path: cafFile });
// });

import { test as setup, expect } from "@playwright/test";
import path from "path";
import { DashboardPage } from "../../pages/DashboardPage.js";

const orgFile = path.join(process.cwd(), "playwright/.auth/org.json");

setup.use({ storageState: orgFile });

setup("setup: caf selected", async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await page.goto("/home");
  await expect(page).toHaveURL(/home/i);

  await dashboard.navigateToFinancialTracking();
});
