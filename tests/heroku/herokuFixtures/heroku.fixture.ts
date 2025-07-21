import { test as base } from "@playwright/test";
import { LoginPage } from "../page/login.page";
import { CheckboxPage } from "../page/checkbox.page";
import { AddRemoveElementPage } from "../page/add_remove_element.page";
import { BasicAuthPage } from "../page/basic_auth.page";
import { CaptureScreenshotPage } from "../page/capture_screenshot.page";
import {DownloadFilePage} from "../page/download_file.page";
import { DragAndDropPage } from "../page/drag_and_drop.page";
import { DropdownPage } from "../page/dropdown.page";
import { EntryAdPage } from "../page/entry_ad.page";
import { ExitIntentPage } from "../page/exit_intent.page";
import { FakeGeoLocationPage } from "../page/fake_geolocation.page";
import {HandleBrokenImagePage} from "../page/handle_broken_img.page";
import { HandleDynamicLoadingPage } from "../page/handle_dynamic_loading.page";
import {HorizontalSliderPage} from "../page/horizontal_slider.page";
import { HoverElementPage } from "../page/hover_element.page";
import {HyperlinkPage} from "../page/hyperlink.page";
import {InfiniteScrollPage} from "../page/infinite_scroll.page";
import {JsAlertPage} from "../page/js_alert.page";
import {KeyPressPage} from "../page/key_press.page";
import { NestedFramesPage } from "../page/nest_frames.page";
import { RightClickContextMenuPage } from "../page/right_click_context_menu.page";
import  {UploadFilePage} from "../page/upload_file.page";
import { WebTablePage } from "../page/web_table.page";


type MyFixtures = {
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  addRemoveElementPage: AddRemoveElementPage;
  basicAuthPage: BasicAuthPage;
  captureScreenshotPage: CaptureScreenshotPage;
  downloadFilePage: DownloadFilePage;
  dragAndDropPage: DragAndDropPage;
  dropdownPage: DropdownPage;
  entryAdPage: EntryAdPage;
  exitIntentPage: ExitIntentPage;
  fakeGeolocationPage: FakeGeoLocationPage;
  handleBrokenImagePage: HandleBrokenImagePage;
  handleDynamicLoadingPage: HandleDynamicLoadingPage;
  horizontalSliderPage: HorizontalSliderPage;
  hoverElementPage: HoverElementPage;
  hyperlinkPage: HyperlinkPage;
  infiniteScrollPage: InfiniteScrollPage;
  jsAlertPage: JsAlertPage;
  keyPressPage: KeyPressPage;
  nestedFramesPage: NestedFramesPage;
  rightClickContextMenuPage: RightClickContextMenuPage;
  uploadFilePage: UploadFilePage;
  webTablePage: WebTablePage;
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
    await use(new DownloadFilePage(page));
  },
  dragAndDropPage: async ({ page }, use) => {
    await use(new DragAndDropPage(page));
  },
  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPage(page));
  },
  entryAdPage: async ({ page }, use) => {
    await use(new EntryAdPage(page));
  },
  exitIntentPage: async ({ page }, use) => {
    await use(new ExitIntentPage(page));
  },
  fakeGeolocationPage: async ({ page }, use) => {
    await use(new FakeGeoLocationPage(page));
  },
  handleBrokenImagePage: async ({ page }, use) => {
    await use(new HandleBrokenImagePage(page));
  },
  handleDynamicLoadingPage: async ({ page }, use) => {
    await use(new HandleDynamicLoadingPage(page));
  },
  horizontalSliderPage: async ({ page }, use) => {
    await use(new HorizontalSliderPage(page));
  },
  hoverElementPage: async ({ page }, use) => {
    await use(new HoverElementPage(page));
  },
  hyperlinkPage: async ({ page }, use) => {
    await use(new HyperlinkPage(page));
  },
  infiniteScrollPage: async ({ page }, use) => {
    await use(new InfiniteScrollPage(page));
  },
  jsAlertPage: async ({ page }, use) => {
    await use(new JsAlertPage(page));
  },
  keyPressPage: async ({ page }, use) => {
    await use(new KeyPressPage(page));
  },
  nestedFramesPage: async ({ page }, use) => {
    await use(new NestedFramesPage(page));
  },
  rightClickContextMenuPage: async ({ page }, use) => {
    await use(new RightClickContextMenuPage(page));
  },
  uploadFilePage: async ({ page }, use) => {
    await use(new UploadFilePage(page));
  },
  webTablePage: async ({ page }, use) => {
    await use(new WebTablePage(page));
  },
});

export { expect } from "@playwright/test";
