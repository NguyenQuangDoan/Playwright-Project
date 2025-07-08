import{test, expect} from './herokuFixtures/heroku.fixture';

test("Able to drag and drop an element", async ({ dragAndDropPage }) => {
    await dragAndDropPage.goto();

    await dragAndDropPage.dragAndDropElement();
    await expect(await dragAndDropPage.columnBHeader()).toHaveText('A');
});
