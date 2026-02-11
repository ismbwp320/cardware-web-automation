/* eslint-disable prettier/prettier */
// import { Browser } from "@playwright/test";
import { CatalystConfig } from "../config";
import path from "path";
import fs from "fs";

// Shared configuration
export const ORG_FILE = path.join(__dirname, `../${CatalystConfig.ORG_FILE}`);

// Auth utilities
export async function createAuthenticatedContext(browser) {
  return browser.newContext({
    storageState: ORG_FILE,
    baseURL: getValidatedBaseUrl(ORG_FILE),
  });
}

export function getValidatedBaseUrl(orgFilePath) {
  try {
    const storageState = JSON.parse(fs.readFileSync(orgFilePath, "utf-8"));
    const state = storageState?.origins;
    const baseURL = state.length > 1 && state[1].origin;
    return baseURL;
  } catch (error) {
    throw new Error(`Error reading auth file: ${error}`);
  }
}