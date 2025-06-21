import { test, expect } from "@playwright/test";

test.describe("Vietnam Airlines Tests", () => {
  test.use({ baseURL: "https://www.vietnamairlines.com" });

  test("Verify able to departure date as Today", async ({ page }) => {
    const today = new Date();

    const currentDate = today.getDate().toString().padStart(2, "0");

    const currentMonth = (today.getMonth() + 1).toString().padStart(2, "0"); 

    const currentYear = today.getFullYear();

    await page.addLocatorHandler(
        page
        .locator('#responsive-image-16401899939790')
        .getByRole('link'),
        async () => {
            await page.locator('#close-button-1454703513202')
            .getByText('×').click();
        }
    );

    console.log(`Current Month: ${currentMonth}`);

    console.log(`Current Date: ${today.getDate()}`);

    await page.goto("/vn/vi/home");

    await page.getByRole("button", { name: "Đồng ý" }).click();

    await page.locator("#city-to-roundtrip").click();

    await page.getByRole("link", { name: "Hà Nội (HAN), Việt Nam" }).click();

    await page
      .getByRole("table")
      .nth(0) // 0: current month, 1: next month
      .getByRole("link", { name: currentDate }) // Select the current date
      .click();

    const departureDate = await page
      .getByRole("textbox", { name: "Ngày đi" })
      .inputValue();

    await expect(departureDate).toBe(
      `${currentDate}/${currentMonth}/${currentYear}`
    );
  });
});
