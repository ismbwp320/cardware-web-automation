import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import path from "path";

const authFile = path.join(process.cwd(), "playwright/.auth/auth.json");

setup("setup: auth", async ({ page }) => {
  if (!process.env.USERNAME || !process.env.PASSWORD) {
    throw new Error("❌ Missing USERNAME or PASSWORD in .env");
  }

  const login = new LoginPage(page);

  await login.goto();
  await login.login(process.env.USERNAME, process.env.PASSWORD);

  await expect(page).toHaveURL(/home|dashboard/i);

  await page.context().storageState({ path: authFile });
});
