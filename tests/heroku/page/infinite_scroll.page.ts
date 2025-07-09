import { Page, Locator } from "@playwright/test";

export class infiniteScrollPage {
  readonly page: Page;
  readonly targetText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.targetText = this.page.getByText("Powered by Elemental Selenium");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com//infinite_scroll");
  }

  async scrollMouseLoadMore() {
    for (let i = 0; i < 10; i++) {
      await this.page.mouse.wheel(0, 1000); // Scroll down to trigger loading of more items
      await this.page.waitForTimeout(1000); // Wait for items to load
    }
  }

  async scrollIntoViewNeeded() {
    await this.targetText.scrollIntoViewIfNeeded();
  }

  getTargetText(): Locator {
    return this.targetText;
  }
}
