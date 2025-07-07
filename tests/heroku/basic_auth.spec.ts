import { test, expect } from './herokuFixtures/heroku.fixture';

test('Basic Auth login', async ({ basicAuthPage }) => {
    
    await basicAuthPage.goto();

    await expect(await basicAuthPage.heading()).toBe('Basic Auth');
});