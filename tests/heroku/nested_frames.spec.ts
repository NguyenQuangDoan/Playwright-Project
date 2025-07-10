import{test, expect} from './herokuFixtures/heroku.fixture';


test("Validate largest due person from table", async ({ nestedFramesPage }) => {
    await nestedFramesPage.goto();

    await nestedFramesPage.getFrameOnTop("[name='frame-left']");
    await nestedFramesPage.verifyFrameTextOnTop("[name='frame-left']", 'LEFT');

    await nestedFramesPage.getFrameOnTop("[name='frame-middle']");
    await nestedFramesPage.verifyFrameTextOnTop("[name='frame-middle']", 'MIDDLE');

    await nestedFramesPage.getFrameOnTop("[name='frame-right']");
    await nestedFramesPage.verifyFrameTextOnTop("[name='frame-right']", 'RIGHT');

    await nestedFramesPage.getFrameOnBottom();
    await nestedFramesPage.verifyFrameTextOnBottom('BOTTOM');
});
