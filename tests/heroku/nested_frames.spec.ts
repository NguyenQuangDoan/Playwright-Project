import { test, expect } from "./herokuFixtures/heroku.fixture";
import { NestedFramesPage } from "./page/nest_frames.page";

test("Validate largest due person from table", async ({ nestedFramesPage }) => {
  await nestedFramesPage.goto();

  for (const frame of NestedFramesPage.FRAMES_ON_TOP) {
    const text = await nestedFramesPage.getFrameTextOnTop(frame.selector);
    expect(text).toBe(frame.expectedText);
  }

  const bottomText = await nestedFramesPage.getFrameTextOnBottom();
  expect(bottomText).toBe("BOTTOM");
});
