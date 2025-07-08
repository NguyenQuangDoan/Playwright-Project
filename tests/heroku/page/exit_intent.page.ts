import { Page, Locator } from "@playwright/test";

export class exitIntentPage {
  readonly page: Page;
  readonly modal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('.modal');
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/exit_intent");
  }

  async moveMouseToCenter() {
    await this.page.mouse.move(400, 400);
  }

  async moveMouseOutScreen() {
    await this.page.mouse.move(600, -10);
  }

  getModal(): Locator {
    return this.modal;
  }
}
