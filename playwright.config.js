import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  testDir: "./tests",
   fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 1,
  reporter: [["html"], ["list"]],
  timeout: 12 * 100000, // 12 seconds per test
  use: {
    baseURL: process.env.BASE_URL || "https://admin.lma.cardwarecloud.com",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },

  projects: [
    // 1) Auth setup
    // {
    //   name: "setup-auth",
    //   testMatch: /.*auth\.setup\.js/,
    // },

    // 2) Org setup depends on auth setup
    // {
    //   name: "setup-org",
    //   testMatch: /.*org\.setup\.js/,
    //   dependencies: ["setup-auth"],
    //   use: {
    //     storageState: "playwright/.auth/auth.json",
    //   },
    // },
    // 3) CAF setup depends on org setup
    // {
    //   name: "setup-caf",
    //   testMatch: /.*caf\.setup\.js/,
    //   dependencies: ["setup-org"],
    //   use: {
    //     storageState: "playwright/.auth/org.json",
    //   },
    // },
    // 4) Actual tests depend on org setup
    // {
    //   name: "chromium",
    //   dependencies: ["setup-org"],
    //   use: {
    //     ...devices["Desktop Chrome"],
    //     storageState: "playwright/.auth/org.json",
    //   },
    // },
    // 5) Actual tests depend on caf setup
    {
      name: "chromium",
      // dependencies: ["setup-auth"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/caf.json",
      },
    },
  ],
});
