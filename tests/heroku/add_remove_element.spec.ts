import { test, expect } from '@playwright/test';

test("Able to add and remove element", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

    await page.getByRole('button', { name: 'Add Element' }).click();
    await expect(page.getByRole('button', { name: '  Delete' })).toBeVisible();
});

test("Able to remove element", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

    await page.getByRole('button', { name: 'Add Element' }).click();
    await expect(page.getByRole('button', { name: '  Delete' })).toBeVisible();

    await page.getByRole('button', { name: '  Delete' }).click();
    await expect(page.getByRole('button', { name: '  Delete' })).not.toBeVisible();
})

test("Able to add multiple elements", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

    for (let i = 0; i < 5; i++) {
        await page.getByRole('button', { name: 'Add Element' }).click();
    }

    const deleteButtons = page.locator('button').filter({ hasText: 'Delete' });
    await expect(deleteButtons).toHaveCount(5);
});