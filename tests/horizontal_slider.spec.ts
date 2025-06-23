import{test, expect} from '@playwright/test';

test("Able to move slider to the right", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");

    await page.getByRole("slider").fill("5");
    await expect(page.locator("#range")).toHaveText("5");
});


test("Able to move slider to the middle", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");

    await page.getByRole("slider").fill("2.5");
    await expect(page.locator("#range")).toHaveText("2.5");
})

test("Able to move slider to the right by evaluate", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");

    await page.evaluate(() => {
        const slider = document.querySelector("input[type='range']") as HTMLInputElement;
        slider.value = "5";
        slider.dispatchEvent(new Event('input'));
        slider.dispatchEvent(new Event('change'));
    });

    await expect(page.locator("#range")).toHaveText("5");
});