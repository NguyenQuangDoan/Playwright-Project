import{test, expect} from '@playwright/test';

test("Able to hover the elememt", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/hovers");

    await page.getByRole("img", {name: "User Avatar"}).nth(0).hover();
    await expect(page.getByText("name: user1")).toBeVisible();
    
    await page.locator(".figcaption a").nth(0).click();
    await expect(page).toHaveURL(/users\/1/);
});
