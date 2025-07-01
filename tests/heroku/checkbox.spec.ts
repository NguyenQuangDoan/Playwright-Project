import{test, expect} from '@playwright/test';

test("able check checkbox", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    await page.locator("form#checkboxes input").nth(0).check();
    await expect(page.getByRole('checkbox').first()).toBeChecked();
    
    await page.locator('input[type="checkbox"]').nth(1).check();
    await expect(page.locator('input[type="checkbox"]').nth(1)).toBeChecked();
});