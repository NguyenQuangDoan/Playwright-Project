import { test, expect } from "./herokuFixtures/heroku.fixture";

test.skip("able check checkbox", async ({ checkboxPage }) => {
  await checkboxPage.goto();

  await checkboxPage.check(1);
  await expect(checkboxPage.toBeChecked(1)).toBeTruthy();
});
