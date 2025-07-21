import{test, expect} from './herokuFixtures/heroku.fixture';

test.beforeEach(async ({ webTablePage }) => {
    await webTablePage.goto();
})

test("Validate largest due person from table", async ({ webTablePage }) => {
    expect( webTablePage.getMaxDuePerson()).toEqual(['Jason Doe']);
});

test("Validate smallest due person from table", async ({ webTablePage }) => {
    expect( webTablePage.getMinDuePerson()).toEqual(['John Smith', 'Tim Conway']);
});
