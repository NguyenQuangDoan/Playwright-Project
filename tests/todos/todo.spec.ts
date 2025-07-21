import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  //create a new todo
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Task update');
  await page.getByTestId('text-input').press('Enter');

  //check
  await page.getByTestId('todo-item-toggle').check();

  //uncheck
  await page.getByTestId('todo-item-toggle').uncheck();

  //delete
  await page.getByTestId('todo-item-button').click();
});