import { Page, Locator, Download } from "@playwright/test";
import * as fs from 'fs';

export class downloadFilePage {
  readonly page: Page;
  readonly downloadLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadLink = page.getByRole('link', { name: 'Jpeg_with_exif.jpeg' });
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/download");
  }

  async downloadJpegFile(): Promise<Download> {
    const [downloadFile] = await Promise.all([
      this.page.waitForEvent('download'),
      this.downloadLink.click(),
    ]);
    return downloadFile;
  }

  async saveDownloadedFile(download: Download, folder: string): Promise<string> {
    const suggestedFilename = download.suggestedFilename();
    const filePath = `${folder}/${suggestedFilename}`;
    await download.saveAs(filePath);
    return filePath;
  }

  async downloadMultipleFiles(fileNames: string[], folder: string): Promise<string[]> {
    const filePaths: string[] = [];

    for (const fileName of fileNames) {
      const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        this.page.getByRole('link', { name: fileName }).first().click(),
      ]);

      const filePath = await this.saveDownloadedFile(download, folder);
      filePaths.push(filePath);
    }

    return filePaths;
  }
}
