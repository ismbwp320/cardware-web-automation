import { test, expect } from "@playwright/test";

test("Home page opens (already logged in + org selected)", async ({ page }) => {
  await page.goto("/home");
  await expect(page).toHaveURL(/home/i);
});





// import { test as base } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage.js';
// import { OrgSelectPage } from '../pages/OrgSelectPage.js';
// // Extend the base test to make all tests run serially
// const test = base.extend({});

// test.describe.configure({ mode: 'serial' }); // <-- This forces serial execution

// test.describe('LMA Web Application', () => {
//   // Declare variables for pages and components
//   let page, login, org, context ;

//   // ---------------------- SETUP ----------------------
//   test.beforeAll(async ({ browser }) => {
//     // Create a new browser context and page instance
//     context = await browser.newContext();
//     page = await context.newPage();

//     // Initialize all page objects
//     login = new LoginPage(page);
//     org = new OrgSelectPage(page);
//   });

//   // ---------------------- TEST CASE #1 ----------------------
//   test('Login Flow', async () => {

//     // Step 1: Navigate to the application login page
//     await login.goto();

//     // Step 2: Perform user login
//     if (!process.env.USERNAME || !process.env.PASSWORD) {
//     throw new Error("USERNAME or PASSWORD is missing in environment variables");
//   }     
//     await login.login(process.env.USERNAME, process.env.PASSWORD);
//   });

//   // ---------------------- TEST CASE #2 ----------------------
//   test('Home Page Flow', async () => {
//     await org.changeOrganization();
//   });

//   test.afterAll(async () => {
//     await context.close();
//   });
// });