import { test, expect } from "./herokuFixtures/heroku.fixture";

test.beforeEach(async ({ addRemoveElementPage }) => {
  await addRemoveElementPage.goto();
});

//Test cases for adding element
// 1. Add an element and check if the delete button is visible
test("Able to add and remove element", async ({ addRemoveElementPage }) => {
  await addRemoveElementPage.addElement();
  await expect(await addRemoveElementPage.getDeleteButton()).toBeVisible();
});

//Test cases for adding and removing element
// 1. Add an element and check if the delete button is visible
// 2. Remove the element and check if the delete button is no longer visible
test("Able to remove element", async ({ addRemoveElementPage }) => {
  await addRemoveElementPage.addElement();
  await expect(await addRemoveElementPage.getDeleteButton()).toBeVisible();

  await addRemoveElementPage.removeElement();
  await expect(await addRemoveElementPage.getDeleteButton()).not.toBeVisible();
});

//Test cases for adding and removing elements
// 1. Add 5 elements and check if the delete button is visible
test("Able to add multiple elements", async ({ addRemoveElementPage }) => {
  const deleteButtons = addRemoveElementPage.addMultipleButtons(5);
  await expect(await deleteButtons).toHaveCount(5);
});
