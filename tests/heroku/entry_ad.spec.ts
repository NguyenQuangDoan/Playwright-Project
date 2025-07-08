import { test, expect } from './herokuFixtures/heroku.fixture';

test('Verify close modal using addLocatorHandler', async ({ entryAdPage }) => {
  await entryAdPage.goto();

  await expect(await entryAdPage.getModal()).toBeVisible();

  // Đăng ký handler tự động đóng modal khi nó xuất hiện
  await entryAdPage.registerModalCloseHandler();

  // Kích hoạt modal lại để test handler
  await entryAdPage.triggerModal();

  // Modal nên đã bị đóng bởi handler
  await expect(await entryAdPage.getModal()).toBeHidden();
});