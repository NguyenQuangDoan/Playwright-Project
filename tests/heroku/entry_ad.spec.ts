import { test, expect } from '@playwright/test';

test('Verify close modal using addLocatorHandler', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/entry_ad");

  const modal = page.locator("#modal");

  await expect(modal).toBeVisible();

  // Đăng ký handler tự động đóng modal khi nó xuất hiện
  await page.addLocatorHandler(modal, async () => {
    await page.getByText("Close", { exact: true }).click();
    await expect(modal).toBeHidden();
  });

  // Kích hoạt modal lại để test handler
  await page.getByRole("link", { name: "click here" }).click();

  // Modal nên đã bị đóng bởi handler
  await expect(modal).toBeHidden();
});