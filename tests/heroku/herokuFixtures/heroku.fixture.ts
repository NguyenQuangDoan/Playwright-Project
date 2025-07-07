import { test as base } from "@playwright/test";
import { LoginPage } from "../page/login.page";
import { CheckboxPage } from "../page/checkbox.page";
import { AddRemoveElementPage } from "../page/add_remove_element.page";
import { BasicAuthPage } from "../page/basic_auth.page";
import { CaptureScreenshotPage } from "../page/capture_screenshot.page";

type MyFixtures = {
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  addRemoveElementPage: AddRemoveElementPage;
  basicAuthPage: BasicAuthPage;
  captureScreenshotPage: CaptureScreenshotPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  checkboxPage: async ({ page }, use) => {
    await use(new CheckboxPage(page));
  },
  addRemoveElementPage: async ({ page }, use) => {
    await use(new AddRemoveElementPage(page));
  },
  basicAuthPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: "admin",
        password: "admin",
      },
    });
    const page = await context.newPage();

    await use(new BasicAuthPage(page));

    await context.close();
  },
  captureScreenshotPage: async ({ page }, use) => {
    await use(new CaptureScreenshotPage(page));
  },
});

export { expect } from "@playwright/test";
