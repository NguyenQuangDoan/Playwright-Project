import {test,expect} from '@playwright/test';

test('Verify Hello World displayed after click Start', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    
    await page.getByRole('button', { name: 'Start' })
    .click();

    await page.waitForSelector('#finish', { state: 'visible' });
    
    await expect(page.getByRole('heading', { name: 'Hello World!' }))
    .toBeVisible();
});