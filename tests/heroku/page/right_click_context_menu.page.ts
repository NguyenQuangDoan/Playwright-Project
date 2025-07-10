import { Page, Locator, expect } from "@playwright/test";

export class rightClickContextMenuPage {
  readonly page: Page;
  readonly contextMenuFrame: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contextMenuFrame = page.locator("#hot-spot");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/context_menu");
  }

  async rightClick() {
    return this.contextMenuFrame.click({ button: "right" });
  }

  async verifyMessageOnDialog(message: string) {
    await this.page.on("dialog", async (dialog) => {
          expect(dialog.message()).toBe(message);
          await dialog.accept();
      });
  }
}
