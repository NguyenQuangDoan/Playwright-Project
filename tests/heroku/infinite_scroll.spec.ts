import {test, expect} from './herokuFixtures/heroku.fixture';

test('infinite scroll', async ({infiniteScrollPage}) => {
    await infiniteScrollPage.goto();
    await infiniteScrollPage.scrollMouseLoadMore();
    await infiniteScrollPage.scrollIntoViewNeeded();

    await expect(await infiniteScrollPage.getTargetText()).toBeVisible();

});