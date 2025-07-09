import{test, expect} from './herokuFixtures/heroku.fixture';

test("Able to hover the elememt", async ({ hoverElementPage }) => {
    await hoverElementPage.goto();

    await hoverElementPage.hoverImage(0);
    await expect(await hoverElementPage.avatarText).toBeVisible();
    
    await hoverElementPage.link.nth(0).click();
    await expect(await hoverElementPage.getCurrentUrl()).toMatch(/users\/1/);
});
