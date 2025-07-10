import { test, expect } from "./herokuFixtures/heroku.fixture";

test("JS Alert", async ({ jsAlertPage }) => {
  await jsAlertPage.goto();

  await jsAlertPage.clickOnButton("Click for JS Alert");

  await jsAlertPage.acceptDialog("I am a JS Alert");

  await expect(
    await jsAlertPage.getAlertMessage("You successfully clicked an alert")
  ).toBeVisible();
});

test("JS Confirm OK", async ({ jsAlertPage }) => {
  await jsAlertPage.goto();

  await jsAlertPage.acceptDialog("I am a JS Confirm");

  await jsAlertPage.clickOnButton("Click for JS Confirm");

  await expect(
    await jsAlertPage.getAlertMessage("You clicked: OK")
  ).toBeVisible();
});

test("JS Confirm Cancel", async ({ jsAlertPage }) => {
  await jsAlertPage.goto();

  await jsAlertPage.dismissDialog("I am a JS Confirm");

  await jsAlertPage.clickOnButton("Click for JS Confirm");

  await expect(
    await jsAlertPage.getAlertMessage("You clicked: Cancel")
  ).toBeVisible();
});

test("js prompt ", async ({ jsAlertPage }) => {
  await jsAlertPage.goto();

  await jsAlertPage.acceptPrompt("I am a JS prompt", "Hello World/n");

  await jsAlertPage.clickOnButton("Click for JS Prompt");
  await expect(
    await jsAlertPage.getAlertMessage("You entered: Hello World")
  ).toBeVisible();
});
