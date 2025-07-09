import { Page, Locator } from "@playwright/test";

export class horizontalSliderPage {
  readonly page: Page;
  readonly slider: Locator;
  readonly reaching: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slider = page.getByRole("slider");
    this.reaching = page.locator("#range");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/horizontal_slider");
  }

  async dragSliderToPoint(position: string) {
    await this.slider.fill(position);
  }

  async waitForFinishDisplay() {
    await this.page.waitForSelector('#finish', { state: 'visible' });
  }

  getHeadingText(): Locator {
    return this.reaching;
  }
}
