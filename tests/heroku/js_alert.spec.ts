import { test, expect } from "@playwright/test";

test("JS Alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  await page.getByRole("button", { name: "Click for JS Alert" }).click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("I am a JS Alert");
    await dialog.accept();
  });

  await expect(
    page.getByText("You successfully clicked an alert")
  ).toBeVisible();
});

test("JS Confirm OK", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("I am a JS Confirm");
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Click for JS Confirm" }).click();

  await expect(page.getByText("You clicked: OK")).toBeVisible();
});

test("JS Confirm Cancel", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("I am a JS Confirm");
    await dialog.dismiss();
  });

  await page.getByRole("button", { name: "Click for JS Confirm" }).click();

  await expect(page.getByText("You clicked: Cancel")).toBeVisible();
});

test("js prompt ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toEqual("I am a JS prompt");
    await dialog.accept("Hello World/n");
  });

  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
  await expect(page.getByText("You entered: Hello World")).toBeVisible();
});
