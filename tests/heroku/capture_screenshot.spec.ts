import{test, expect} from './herokuFixtures/heroku.fixture';

test("Able to capture the fullscreen", async ({ captureScreenshotPage }) => {
    await captureScreenshotPage.goto();

    await captureScreenshotPage.captureFullScreen();
});


test("Able to capture the viewport", async ({ captureScreenshotPage }) => {
    await captureScreenshotPage.goto();

    await captureScreenshotPage.captureViewport();
})


test("Able to capture the specific element", async ({ captureScreenshotPage }) => {
     await captureScreenshotPage.goto();

    await captureScreenshotPage.captureElement();
});


