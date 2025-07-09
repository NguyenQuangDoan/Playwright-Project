import { Page, Locator } from "@playwright/test";

export class hoverElementPage {
  readonly page: Page;
  readonly avatarImage: Locator;
  readonly avatarText: Locator;
  readonly link: Locator;

  constructor(page: Page) {
    this.page = page;
    this.avatarImage = page.getByRole("img", { name: "User Avatar" });
    this.avatarText = page.getByText("name: user1");
    this.link = page.locator(".figcaption a");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/hovers");
  }

  async hoverImage(index: number) {
    await this.avatarImage.nth(index).hover();
  }

  async clickOnLink(index: number) {
    await this.link.nth(index).click();
  }

  getAvatarText(): Locator {
    return this.avatarText;
  }

  async getCurrentUrl(): Promise<string> {
    return await this.page.url();
  }
}
