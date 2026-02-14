/* eslint-disable prettier/prettier */
import fs from "fs";


// Auth utilities

export async function createAuthenticatedContext(browser, file) {
  return browser.newContext({
    storageState: file
  });
}
export function getValidatedBaseUrl(orgFilePath) {
  try {
    const storageState = JSON.parse(fs.readFileSync(orgFilePath, "utf-8"));
    const origins = storageState?.origins;

    if (origins && origins.length > 0 && origins[0].origin) {
      return origins[0].origin; // safer than index 1
    }

    return undefined; // never return boolean
  } catch (error) {
    throw new Error(`Error reading auth file: ${error}`);
  }
}
