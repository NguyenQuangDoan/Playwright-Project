import { Page, Locator } from "@playwright/test";
import * as fs from "fs";

export class CaptureScreenshotPage {
  readonly page: Page;
  readonly hotSpot: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hotSpot = page.locator("#hot-spot");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/context_menu");
  }

  async captureFullScreen(timestamp: number) {
    await this.page.screenshot({
      path: `screenshot_fullscreen${timestamp}.png`,
      fullPage: true,
    });
  }

  async captureViewport(timestamp: number) {
    await this.page.screenshot({
      path: `screenshot_viewport${timestamp}.png`,
    });
  }

  async captureElement(timestamp: number) {
    const element = this.hotSpot;
    await element.screenshot({
      path: `screenshot_element${timestamp}.png`,
    });
  }

  async verifyScreenshotExists(timestamp) {
    const fileName = `screenshot_fullscreen${timestamp}.png`;
    return fs.existsSync(fileName);
  }
}
