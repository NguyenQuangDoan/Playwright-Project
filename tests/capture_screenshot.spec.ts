import{test, expect} from '@playwright/test';

test("Able to capture the fullscreen", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/context_menu");

    const timestamp = Date.now();
    await page
    .screenshot({ path: `screenshot_fullscreen${timestamp}.png`, fullPage: true });
});


test("Able to capture the viewport", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/context_menu");

    const timestamp = Date.now();
    await page
    .screenshot({ path: `screenshot_viewport${timestamp}.png` });
})


test("Able to capture the specific element", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/context_menu");

    const timestamp = Date.now();
    const element = page.locator("#hot-spot");
    await element.screenshot({ path: `screenshot_element${timestamp}.png` });
});


