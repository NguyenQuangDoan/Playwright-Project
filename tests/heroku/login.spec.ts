import{test, expect} from './herokuFixtures/heroku.fixture';

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
    test(`login with username: ${data.username} and password: ${data.password} then flash message ${data.flashMessage} visibile`,
        {tag: "@smoke"},
        async ({ loginPage }) => {
            await loginPage.goto();
            await loginPage.submitForm(data.username, data.password);

            console.log(`Current URL: ${await loginPage.url()}`);
            await expect(await loginPage.url()).toBe(data.expectedUrl);

            const messageText = await loginPage.getFlashmessage();
            await expect(messageText).toContain(data.flashMessage);
    });
});