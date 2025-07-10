import{test, expect} from './herokuFixtures/heroku.fixture';

test("Able to press key from keyboard", async ({ keyPressPage }) => {
    await keyPressPage.goto();

  await keyPressPage.clickOnField();
  await keyPressPage.keyPress("Escape");
  await keyPressPage.verifyKeyPress("You entered: ESCAPE");

  await keyPressPage.clickOnField();
  await keyPressPage.keyPress("Tab");
  await keyPressPage.verifyKeyPress("You entered: TAB");
});
