import { test, expect } from "./herokuFixtures/heroku.fixture";

test("fake geolocation", async ({ fakeGeolocationPage }) => {
  const latitude = 37.7749; // San Francisco
  const longitude = -122.4194;

  await fakeGeolocationPage.setGeoLocation(latitude, longitude);

  await fakeGeolocationPage.goto();
  await fakeGeolocationPage.clickButton();

  await expect(await fakeGeolocationPage.getLatValue()).toHaveText("37.7749");
  await expect(await fakeGeolocationPage.getLongValue()).toHaveText(
    "-122.4194"
  );
});
