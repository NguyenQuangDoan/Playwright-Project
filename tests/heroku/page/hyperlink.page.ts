import { Page, Locator } from "@playwright/test";

export class hyperlinkPage {
  readonly page: Page;
    readonly link200: Locator;
    readonly link301: Locator;
    readonly link404: Locator;
    readonly link500: Locator;
    readonly linkHere: Locator;

  constructor(page: Page) {
    this.page = page;
    this.link200 = this.page.getByRole("link", { name: "200" });
    this.link301 = this.page.getByRole("listitem")
        .filter({ hasText: '301' })
        .getByRole('link');
    this.link404 = this.page.getByRole("link", { name: "404" });
    this.link500 = this.page.getByRole("link", { name: "500" });
    this.linkHere = this.page.getByRole("link", { name: "here" });
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/status_codes");
  }

  async clickLink200() {
    await this.link200.click();
  }

    async clickLink301() {
        await this.link301.click();
    }

    async clickLink404() {
        await this.link404.click();
    }

    async clickLink500() {
        await this.link500.click();
    }

    async clickLinkHere() {
    await this.linkHere.click();
    }

    async goBack() {
    await this.page.goBack();
    }

  async getCurrentUrl(): Promise<string> {
    return await this.page.url();
  }
}
