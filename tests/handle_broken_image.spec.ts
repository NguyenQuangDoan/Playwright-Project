import { test, expect } from "@playwright/test";

test("verify broken image", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");

  const images = page.locator("img");

  // Check if the image is present
  const allImages = await images.all();

  for (const image of allImages) {
    const imgSrc = await image.getAttribute("src");
    expect(imgSrc?.length).toBeGreaterThan(1);
    const res = await page.request.get(
      "https://the-internet.herokuapp.com/" + imgSrc
    );
    if (res.status() !== 200) {
      console.error(
        `❌ Broken image detected: ${imgSrc} → Status: ${res.status()}`
      );
    } else {
      console.log(`✅ Image is valid: ${imgSrc} → Status: ${res.status()}`);
    }
  }
});
