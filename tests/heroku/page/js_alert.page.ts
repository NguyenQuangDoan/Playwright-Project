import { Page, Locator, expect } from "@playwright/test";

export class jsAlertPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      "https://the-internet.herokuapp.com/javascript_alerts"
    );
  }

  async clickOnButton(buttonText: string) {
    const button = this.page.getByRole("button", { name: buttonText });
    await button.click();
  }

  async acceptDialog(message: string) {
    await this.page.on("dialog", async (dialog) => {
      expect(dialog.message()).toEqual(message);
      await dialog.accept();
    });
  }

  async dismissDialog(message: string) {
    await this.page.on("dialog", async (dialog) => {
      expect(dialog.message()).toEqual(message);
      await dialog.dismiss();
    });
  }

  async acceptPrompt(message: string, inputText: string) {
    await this.page.on("dialog", async (dialog) => {
      expect(dialog.message()).toEqual(message);
      await dialog.accept(inputText);
    });
  }

  async getAlertMessage(message: string) {
    return this.page.getByText(message);
  }
}
