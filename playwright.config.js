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

  use: {
    baseURL: process.env.BASE_URL || "https://admin.lma.cardwarecloud.com",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },

  projects: [
    // 1) Auth setup
    {
      name: "setup-auth",
      testMatch: /.*auth\.setup\.js/,
    },

    // 2) Org setup depends on auth setup
    {
      name: "setup-org",
      testMatch: /.*org\.setup\.js/,
      dependencies: ["setup-auth"],
      use: {
        storageState: "playwright/.auth/auth.json",
      },
    },

    // 3) Actual tests depend on org setup
    {
      name: "chromium",
      dependencies: ["setup-org"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/org.json",
      },
    },
  ],
});




// // @ts-check
// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: false,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   // workers: process.env.CI ? 1 : undefined,
//   workers: 1,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   // reporter: 'html',
//   reporter: [["html"], ["list"]],
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   // use: {
//   //   /* Base URL to use in actions like `await page.goto('')`. */
//   //   // baseURL: 'http://localhost:3000',

//   //   /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//   //   trace: 'on-first-retry',
//   // },
//   use: {
//     baseURL: process.env.BASE_URL || 'https://admin.lma.cardwarecloud.com',
//     headless: true,
//     screenshot: "only-on-failure",
//     video: "retain-on-failure",
//     trace: "on-first-retry",
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'],
//         storageState: "playwright/.auth/user.json",
//        },
//     },

//     // {
//     //   name: 'firefox',
//     //   use: { ...devices['Desktop Firefox'] },
//     // },

//     // {
//     //   name: 'webkit',
//     //   use: { ...devices['Desktop Safari'] },
//     // },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });

