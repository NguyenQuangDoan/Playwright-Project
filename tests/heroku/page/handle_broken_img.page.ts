import { Page, Locator } from "@playwright/test";

export class handleBrokenImagePage {
  readonly page: Page;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
    this.images = page.locator("img");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/broken_images");
  }

  async getAllImages(): Promise<Locator[]> {
    return this.images.all();
  }

  async getImageSrc(image: Locator): Promise<string | null> {
    return image.getAttribute('src');
  }

  async checkImageStatus(imgSrc: string): Promise<{ status: number; url: string }> {
    const fullUrl = `https://the-internet.herokuapp.com/${imgSrc}`;
    const response = await this.page.request.get(fullUrl);
    return { status: response.status(), url: fullUrl };
  }
}
