import { test as base } from "@playwright/test";
import { LoginPage } from "../page/login.page";
import { CheckboxPage } from "../page/checkbox.page";
import { AddRemoveElementPage } from "../page/add_remove_element.page";
import { BasicAuthPage } from "../page/basic_auth.page";
import { CaptureScreenshotPage } from "../page/capture_screenshot.page";
import {downloadFilePage} from "../page/download_file.page";
import { dragAndDropPage } from "../page/drag_and_drop.page";
import { dropdownPage } from "../page/dropdown.page";
import { entryAdPage } from "../page/entry_ad.page";
import { exitIntentPage } from "../page/exit_intent.page";
import { fakeGeoLocationPage } from "../page/fake_geolocation.page";
import {handleBrokenImagePage} from "../page/handle_broken_img.page";
import { handleDynamicLoadingPage } from "../page/handle_dynamic_loading.page";
import {horizontalSliderPage} from "../page/horizontal_slider.page";
import { hoverElementPage } from "../page/hover_element.page";
import {hyperlinkPage} from "../page/hyperlink.page";
import {infiniteScrollPage} from "../page/infinite_scroll.page";
import {jsAlertPage} from "../page/js_alert.page";
import {keyPressPage} from "../page/key_press.page";
import { nestedFramesPage } from "../page/nest_frames.page";
import { rightClickContextMenuPage } from "../page/right_click_context_menu.page";
import  {uploadFilePage} from "../page/upload_file.page";
import { webTablePage } from "../page/web_table.page";


type MyFixtures = {
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  addRemoveElementPage: AddRemoveElementPage;
  basicAuthPage: BasicAuthPage;
  captureScreenshotPage: CaptureScreenshotPage;
  downloadFilePage: downloadFilePage;
  dragAndDropPage: dragAndDropPage;
  dropdownPage: dropdownPage;
  entryAdPage: entryAdPage;
  exitIntentPage: exitIntentPage;
  fakeGeolocationPage: fakeGeoLocationPage;
  handleBrokenImagePage: handleBrokenImagePage;
  handleDynamicLoadingPage: handleDynamicLoadingPage;
  horizontalSliderPage: horizontalSliderPage;
  hoverElementPage: hoverElementPage;
  hyperlinkPage: hyperlinkPage;
  infiniteScrollPage: infiniteScrollPage;
  jsAlertPage: jsAlertPage;
  keyPressPage: keyPressPage;
  nestedFramesPage: nestedFramesPage;
  rightClickContextMenuPage: rightClickContextMenuPage;
  uploadFilePage: uploadFilePage;
  webTablePage: webTablePage;
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
  downloadFilePage: async ({ page }, use) => {
    await use(new downloadFilePage(page));
  },
  dragAndDropPage: async ({ page }, use) => {
    await use(new dragAndDropPage(page));
  },
  dropdownPage: async ({ page }, use) => {
    await use(new dropdownPage(page));
  },
  entryAdPage: async ({ page }, use) => {
    await use(new entryAdPage(page));
  },
  exitIntentPage: async ({ page }, use) => {
    await use(new exitIntentPage(page));
  },
  fakeGeolocationPage: async ({ page }, use) => {
    await use(new fakeGeoLocationPage(page));
  },
  handleBrokenImagePage: async ({ page }, use) => {
    await use(new handleBrokenImagePage(page));
  },
  handleDynamicLoadingPage: async ({ page }, use) => {
    await use(new handleDynamicLoadingPage(page));
  },
  horizontalSliderPage: async ({ page }, use) => {
    await use(new horizontalSliderPage(page));
  },
  hoverElementPage: async ({ page }, use) => {
    await use(new hoverElementPage(page));
  },
  hyperlinkPage: async ({ page }, use) => {
    await use(new hyperlinkPage(page));
  },
  infiniteScrollPage: async ({ page }, use) => {
    await use(new infiniteScrollPage(page));
  },
  jsAlertPage: async ({ page }, use) => {
    await use(new jsAlertPage(page));
  },
  keyPressPage: async ({ page }, use) => {
    await use(new keyPressPage(page));
  },
  nestedFramesPage: async ({ page }, use) => {
    await use(new nestedFramesPage(page));
  },
  rightClickContextMenuPage: async ({ page }, use) => {
    await use(new rightClickContextMenuPage(page));
  },
  uploadFilePage: async ({ page }, use) => {
    await use(new uploadFilePage(page));
  },
  webTablePage: async ({ page }, use) => {
    await use(new webTablePage(page));
  },
});

export { expect } from "@playwright/test";
