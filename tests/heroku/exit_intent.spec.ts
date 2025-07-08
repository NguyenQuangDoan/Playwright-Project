import { test, expect } from './herokuFixtures/heroku.fixture';

test('Modal appear after move out mouse form viewport', async ({ exitIntentPage }) => {
    await exitIntentPage.goto();

    await exitIntentPage.moveMouseToCenter();

    await exitIntentPage.moveMouseOutScreen();

    await expect(await exitIntentPage.getModal()).toBeVisible();
});