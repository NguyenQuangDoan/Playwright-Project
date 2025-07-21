import { Page, Locator, FrameLocator, expect } from "@playwright/test";

export class NestedFramesPage {
  readonly page: Page;
  static FRAME_TOP = "[name='frame-top']";
  static FRAME_LEFT = 'frame[name="frame-left"]';
  static FRAME_MIDDLE = 'frame[name="frame-middle"]';
  static FRAME_RIGHT = 'frame[name="frame-right"]';
  static FRAMES_ON_TOP = [
    { selector: this.FRAME_LEFT, expectedText: "LEFT" },
    { selector: this.FRAME_MIDDLE, expectedText: "MIDDLE" },
    { selector: this.FRAME_RIGHT, expectedText: "RIGHT" },
  ];
  static FRAME_BOTTOM = "[name='frame-bottom']";

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/nested_frames");
  }

  async getFrameTextOnTop(childFrameSelector) {
    const topFrame = this.page.frameLocator(NestedFramesPage.FRAME_TOP);
    const childFrame = topFrame.locator(childFrameSelector);
    const text = await childFrame.contentFrame().locator('body').textContent();
    return text ? text.trim() : '';
  }

  async getFrameTextOnBottom() {
    const bottomFrame = this.page.frameLocator(NestedFramesPage.FRAME_BOTTOM);
    const text = await bottomFrame.locator('body').textContent();
    return text ? text.trim() : '';
  }
}
