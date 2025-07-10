import { Page, Locator,FrameLocator, expect } from "@playwright/test";

export class nestedFramesPage {
  readonly page: Page;
  readonly topFrame: FrameLocator;
  readonly bottomFrame: FrameLocator;

  constructor(page: Page) {
    this.page = page;
    this.topFrame = page.frameLocator("[name='frame-top']");
    this.bottomFrame = page.frameLocator("[name='frame-bottom']");
  }

  async goto() {
    await this.page.goto(
      "https://the-internet.herokuapp.com/nested_frames"
    );
  }

  async getFrameOnTop(name: string): Promise<Locator> {
    return this.topFrame.frameLocator(name).locator('body');
  }

  async verifyFrameTextOnTop(name: string, text: string) {
    await expect(await this.getFrameOnTop(name)).toHaveText(text);
  }

  async getFrameOnBottom(): Promise<Locator> {
    return this.bottomFrame?.locator('body')
  }

    async verifyFrameTextOnBottom(text: string) {
        await expect(await this.getFrameOnBottom()).toHaveText(text);
    }
}
