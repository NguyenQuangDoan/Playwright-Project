import{test, expect} from '@playwright/test';

test("Able to press key from keyboard", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/key_presses");

    const input = page.locator("#target");

  await input.click();
  await input.press("Escape");
  await expect(page.locator("#result")).toHaveText("You entered: ESCAPE");

  await input.click();
  await input.press("Tab");
  await expect(page.locator("#result")).toHaveText("You entered: TAB");
});
