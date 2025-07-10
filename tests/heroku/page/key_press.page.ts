import { Page, Locator, expect } from "@playwright/test";

export class keyPressPage {
  readonly page: Page;
  readonly fieldInput: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fieldInput = this.page.locator("#target");
    this.resultText = this.page.locator("#result");
  }

  async goto() {
    await this.page.goto(
      "https://the-internet.herokuapp.com/key_presses"
    );
  }

  async keyPress(key: string) {
    await this.fieldInput.press(key);
  }

  async clickOnField() {
    await this.fieldInput.click();
  }

  async verifyKeyPress(message: string) {
    await expect(this.resultText).toHaveText(message);
  }
}
