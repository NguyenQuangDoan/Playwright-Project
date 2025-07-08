import { Page, Locator } from "@playwright/test";

export class entryAdPage {
  readonly page: Page;
  readonly modal: Locator;
  readonly closeButton: Locator;
  readonly clickHereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('#modal');
    this.closeButton = page.getByText('Close', { exact: true });
    this.clickHereLink = page.getByRole('link', { name: 'click here' });
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/entry_ad");
  }

  async registerModalCloseHandler() {
    await this.page.addLocatorHandler(this.modal, async () => {
      await this.closeButton.click();
    });
  }

  async triggerModal() {
    await this.clickHereLink.click();
  }

  getModal(): Locator {
    return this.modal;
  }
}
