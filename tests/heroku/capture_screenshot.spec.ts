import { test, expect } from "./herokuFixtures/heroku.fixture";

test.beforeEach(async ({ captureScreenshotPage }) => {
  await captureScreenshotPage.goto();
});

test("Able to capture the fullscreen", async ({ captureScreenshotPage }) => {
  const timestamp = Date.now();
  await captureScreenshotPage.captureFullScreen(timestamp);
  expect(captureScreenshotPage.verifyScreenshotExists(timestamp)).toBeTruthy();
});

test("Able to capture the viewport", async ({ captureScreenshotPage }) => {
  const timestamp = Date.now();
  await captureScreenshotPage.captureViewport(timestamp);
  expect(captureScreenshotPage.verifyScreenshotExists(timestamp)).toBeTruthy();
});

test("Able to capture the specific element", async ({
  captureScreenshotPage,
}) => {
  const timestamp = Date.now();
  await captureScreenshotPage.captureElement(timestamp);
  expect(captureScreenshotPage.verifyScreenshotExists(timestamp)).toBeTruthy();
});
