import{test, expect} from './herokuFixtures/heroku.fixture';

test("Able select Option 1", async ({ dropdownPage }) => {
    await dropdownPage.goto();

    await dropdownPage.selectOption();
    await expect(await dropdownPage.dropdown()).toHaveValue('1');
});

test("Able select multiple options", async ({ dropdownPage }) => {
    await dropdownPage.gotoMultipleOptions();

    await dropdownPage.selectMultipleOptions(['banana','apple', 'orange', 'grape']);
    await expect(await dropdownPage.fruitsDropdown()).toHaveValues(['banana','apple', 'orange', 'grape']);
});

test("Deselected all options", async ({ dropdownPage }) => {
    await dropdownPage.gotoMultipleOptions();
    await dropdownPage.deselectAllOptions();
    await expect(await dropdownPage.fruitsDropdown()).toHaveValues([])
});