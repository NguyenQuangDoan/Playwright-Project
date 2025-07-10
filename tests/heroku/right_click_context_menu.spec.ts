import{test} from './herokuFixtures/heroku.fixture';

test("Able to right click - context menu", async ({ rightClickContextMenuPage }) => {
    await rightClickContextMenuPage.goto();

    await rightClickContextMenuPage.rightClick();

    await rightClickContextMenuPage.verifyMessageOnDialog("You selected a context menu");
});
