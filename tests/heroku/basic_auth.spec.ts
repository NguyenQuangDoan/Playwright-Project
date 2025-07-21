import { test, expect } from './herokuFixtures/heroku.fixture';

//Test case for Basic Auth
//1. Navigate to the Basic Auth page
//2. Login with valid credentials
//3. Verify the heading text is 'Basic Auth'
test('Basic Auth login', async ({ basicAuthPage }) => {
    
    await basicAuthPage.goto();

    await expect(await basicAuthPage.heading()).toBe('Basic Auth');
});