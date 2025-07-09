import {test,expect} from './herokuFixtures/heroku.fixture';

test('Verify Hello World displayed after click Start', async ({handleDynamicLoadingPage}) => {
    await handleDynamicLoadingPage.goto();
    
    await handleDynamicLoadingPage.clickButton();

    await handleDynamicLoadingPage.waitForFinishDisplay();
    
    await expect(await handleDynamicLoadingPage.getHeadingText())
    .toBeVisible();
});