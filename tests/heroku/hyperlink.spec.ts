import{test, expect} from './herokuFixtures/heroku.fixture';

test("Able to click on hyperlink and get back", async ({ hyperlinkPage }) => {
    await hyperlinkPage.goto();

    await hyperlinkPage.clickLink200();
    await expect(await hyperlinkPage.getCurrentUrl()).toMatch(/status_codes\/200/);
    await hyperlinkPage.clickLinkHere();

    await hyperlinkPage.clickLink301();
    await expect(await hyperlinkPage.getCurrentUrl()).toMatch(/status_codes\/301/);
    await hyperlinkPage.goBack();

    await hyperlinkPage.clickLink404();
    await expect(await hyperlinkPage.getCurrentUrl()).toMatch(/status_codes\/404/);
    await hyperlinkPage.clickLinkHere();

    await hyperlinkPage.clickLink500();
    await expect(await hyperlinkPage.getCurrentUrl()).toMatch(/status_codes\/500/);
    await hyperlinkPage.clickLinkHere();
});
