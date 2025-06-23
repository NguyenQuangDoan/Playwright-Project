import{test, expect} from '@playwright/test';

test("Able to right click - context menu", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/context_menu");

    await page.locator("#hot-spot").click({button: "right"});

    page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("You selected a context menu");
    await dialog.accept();
  });
});
