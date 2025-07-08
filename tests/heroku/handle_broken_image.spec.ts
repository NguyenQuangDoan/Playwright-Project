import { test, expect } from "./herokuFixtures/heroku.fixture";

test("verify broken image", async ({ handleBrokenImagePage }) => {
  await handleBrokenImagePage.goto();

  // Check if the image is present
  const allImages = await handleBrokenImagePage.getAllImages();

  for (const image of allImages) {
    const imgSrc = await handleBrokenImagePage.getImageSrc(image);
    expect(imgSrc?.length).toBeGreaterThan(1);

    if (imgSrc) {
      const { status, url } = await handleBrokenImagePage.checkImageStatus(imgSrc);
      if (status !== 200) {
        console.error(`❌ Broken image detected: ${url} → Status: ${status}`);
      } else {
        console.log(`✅ Image is valid: ${url} → Status: ${status}`);
      }
    }
  }
});
