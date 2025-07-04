import { test, expect } from '@playwright/test';

test('Modal appear after move out mouse form viewport', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/exit_intent');

    await page.mouse.move(400, 400);

    await page.mouse.move(600, -10);

    await expect(page.locator('.modal')).toBeVisible();
});