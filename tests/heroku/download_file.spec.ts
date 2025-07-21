import { test, expect } from "./herokuFixtures/heroku.fixture";
import * as fs from "fs";

test.beforeEach(async ({ downloadFilePage }) => {
  await downloadFilePage.goto();
});

test("download a file", async ({ downloadFilePage }) => {
  const downloadFile = await downloadFilePage.downloadJpegFile();
  expect(downloadFile.suggestedFilename()).toBe("abdelghaffar.jpeg");
  const filePath = await downloadFilePage.saveDownloadedFile(
    downloadFile,
    "download"
  );
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test("download multiple files", async ({ downloadFilePage }) => {
  const fileNames = ["dummy.txt", "some-file.txt"];

  const filePaths = await downloadFilePage.downloadMultipleFiles(
    fileNames,
    "download"
  );

  for (let i = 0; i < fileNames.length; i++) {
    expect(filePaths[i]).toContain(fileNames[i]);
    expect(fs.existsSync(filePaths[i])).toBeTruthy();
  }
});
