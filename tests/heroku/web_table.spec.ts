import{test, expect} from './herokuFixtures/heroku.fixture';


test("Validate largest due person from table", async ({ webTablePage }) => {
    await webTablePage.goto();
    
    await webTablePage.getMaxDuePerson();
});

test("Validate smallest due person from table", async ({ webTablePage }) => {
    await webTablePage.goto();

    await webTablePage.getMinDuePerson();
});
