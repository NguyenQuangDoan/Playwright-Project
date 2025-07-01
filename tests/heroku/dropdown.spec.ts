import{test, expect} from '@playwright/test';

test("Able select Option 1", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");

    await page.locator("#dropdown").selectOption({label: 'Option 1'});
    await expect(page.locator("#dropdown")).toHaveValue('1');
});

test("Able select multiple options", async ({ page }) => {
    await page.goto("https://output.jsbin.com/osebed/2");

    await page.locator("#fruits").selectOption(['banana','apple', 'orange', 'grape']);
    await expect(page.locator("#fruits")).toHaveValues(['banana','apple', 'orange', 'grape']);
});

test("Deselected all options", async ({ page }) => {
    await page.goto("https://output.jsbin.com/osebed/2");
    await page.locator("#fruits").selectOption([]);
    await expect(page.locator("#fruits")).toHaveValues([])
});