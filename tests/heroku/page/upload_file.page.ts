import { Page, Locator, expect } from "@playwright/test";

export class uploadFilePage {
  readonly page: Page;
  readonly buttonUpload: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonUpload = page.getByRole("button", { name: "Upload" });
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/upload");
  }

  async setInputFiles(filePath: string) {
    return this.page.setInputFiles('input[type="file"]', filePath);
  }

  async clickUploadButton() {
    await this.buttonUpload.click();
  }

    async verifyUploadedFile(fileName: string) {
        await expect(this.page.locator("#uploaded-files")).toContainText(fileName);
    }
}
