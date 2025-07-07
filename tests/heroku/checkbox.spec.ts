import { check } from 'zod/v4';
import{test, expect} from './herokuFixtures/heroku.fixture';
import { CheckboxPage } from './page/checkbox.page';

test("able check checkbox", async ({ checkboxPage }) => {
    await checkboxPage.goto();

    await checkboxPage.check(1);
    await expect(checkboxPage.toBeChecked(1)).toBeTruthy();
});