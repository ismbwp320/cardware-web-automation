/* eslint-disable prettier/prettier */


// config.js
export const CatalystConfig = {
  BASE_URL: process.env.BASE_URL || "https://admin.lma.cardwarecloud.com",
  PATHS: {
    LOGIN: "/login",
    HOME: "/home",
  },
  AUTH: {
    EMAIL: process.env.USER_EMAIL || "justin+lma@catalystxl.com",
    PASSWORD: process.env.USER_PASSWORD || "Vacation2025!!",
  },
  AUTH_FILE: "playwright/.auth/auth.json",
  ORG_FILE: "playwright/.auth/org.json", // Relative to project root
  CAF_FILE: "playwright/.auth/caf.json" // Relative to project root
};

export const ORG_NAME = process.env.ORG_NAME || "Developer Testing";
export const SPACE_NAME = process.env.SPACE_NAME || "demo 320";
export const ORG_SPACE_NAME = process.env.SPACE_NAME || "demo 320";
export const ORG_PROJECT_NAME = process.env.PROJECT_NAME || "demo Project 1";
export const ORG_PROJECT_FOLDER = process.env.FOLDER_NAME || "demo folder 1";
export const ORG_COMMON_FOLDER = process.env.COMMON_FOLDER || "testing folder";
export const ORG_TEST_FILES = process.env.TEST_FILES || ['pexels-02.jpg', 'pexels-01.jpg'];
