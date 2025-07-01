import{test, expect} from '@playwright/test';
const dataSet = [{
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    expectedUrl: 'https://the-internet.herokuapp.com/secure',
    flashMessage: 'You logged into a secure area!'
},{
    username: 'invalidUser',
    password: 'SuperSecretPassword!',
    expectedUrl: 'https://the-internet.herokuapp.com/login',
    flashMessage: 'Your username is invalid!'
},{
    username: 'tomsmith',
    password: 'invalidPassword',
    expectedUrl: 'https://the-internet.herokuapp.com/login',
    flashMessage: 'Your password is invalid!'
},{
    username: '',
    password: '',
    expectedUrl: 'https://the-internet.herokuapp.com/login',
    flashMessage: 'Your username is invalid!'
},{
    username: 'tomsmith',
    password: '',
    expectedUrl: 'https://the-internet.herokuapp.com/login',
    flashMessage: 'Your password is invalid!'
},{
    username: '',
    password: 'SuperSecretPassword!',
    expectedUrl: 'https://the-internet.herokuapp.com/login',
    flashMessage: 'Your username is invalid!'
}]

dataSet.forEach(data => {
    test(`Login with username: ${data.username} and password: ${data.password} then flash message ${data.flashMessage}`, 
        async ({page}) => {
            await page.goto('https://the-internet.herokuapp.com/login');
            await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
            await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
            await page.getByRole('button', { name: 'Login' }).click();
            
            await expect(page).toHaveURL(data.expectedUrl);
            await expect(page.getByText(data.flashMessage)).toBeVisible();
    });
});