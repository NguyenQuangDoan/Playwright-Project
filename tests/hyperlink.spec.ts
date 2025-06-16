import{test, expect} from '@playwright/test';

test("Able to click on hyperlink and get back", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/status_codes");

    await page.getByRole("link", {name: "200"}).click();
    await expect(page).toHaveURL(/status_codes\/200/);
    await page.getByRole("link", {name: "here"}).click();

    await page.getByRole("listitem")
        .filter({ hasText: '301' })
        .getByRole('link')
        .click();
    await expect(page).toHaveURL(/status_codes\/301/);
    await page.goBack();

    await page.getByRole("link", {name: "404"}).click();
    await expect(page).toHaveURL(/status_codes\/404/);
    await page.getByRole("link", {name: "here"}).click();

    await page.getByRole("link", {name: "500"}).click();
    await expect(page).toHaveURL(/status_codes\/500/);
    await page.getByRole("link", {name: "here"}).click();
});
