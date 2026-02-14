import { test, expect } from "@playwright/test";

test("Home page opens (already logged in + org selected)", async ({ page }) => {
  await page.goto("/home");
  await expect(page).toHaveURL(/home/i);
  await page.waitForTimeout(9000);
});
