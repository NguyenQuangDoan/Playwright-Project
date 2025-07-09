import { Page, Locator } from "@playwright/test";

export class handleDynamicLoadingPage {
  readonly page: Page;
  readonly button: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.button = page.getByRole('button', { name: 'Start' });
    this.heading = page.getByRole('heading', { name: 'Hello World!' });
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  }

  async clickButton() {
    await this.button.click();
  }

  async waitForFinishDisplay() {
    await this.page.waitForSelector('#finish', { state: 'visible' });
  }

  getHeadingText(): Locator {
    return this.heading;
  }
}
