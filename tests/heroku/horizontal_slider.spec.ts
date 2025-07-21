import { test, expect } from "./herokuFixtures/heroku.fixture";

test.beforeEach(async ({ horizontalSliderPage }) => {
  await horizontalSliderPage.goto();
});

test("Able to move slider to the right", async ({ horizontalSliderPage }) => {
  await horizontalSliderPage.dragSliderToPoint("5");
  await expect(await horizontalSliderPage.reaching).toHaveText("5");
});

test("Able to move slider to the middle", async ({ horizontalSliderPage }) => {
  await horizontalSliderPage.dragSliderToPoint("2.5");
  await expect(await horizontalSliderPage.reaching).toHaveText("2.5");
});
