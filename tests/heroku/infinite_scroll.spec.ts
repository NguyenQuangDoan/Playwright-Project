import {test, expect} from '@playwright/test';

test('infinite scroll', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com//infinite_scroll");
    for (let i = 0; i < 10; i++) {
        await page.mouse.wheel(0, 1000); // Scroll down to trigger loading of more items
        await page.waitForTimeout(1000); // Wait for items to load
    }
    await page.getByText('Powered by Elemental Selenium').scrollIntoViewIfNeeded();

    await expect(page.getByText('Powered by Elemental Selenium')).toBeVisible();

});