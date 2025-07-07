import { test, expect } from './herokuFixtures/heroku.fixture';

test("Able to add and remove element", async ({ addRemoveElementPage }) => {
    await addRemoveElementPage.goto();

    await addRemoveElementPage.addElement();
    await expect(await addRemoveElementPage.getDeleteButton()).toBeVisible();
});

test("Able to remove element", async ({ addRemoveElementPage }) => {
    await addRemoveElementPage.goto();

    await addRemoveElementPage.addElement();
    await expect(await addRemoveElementPage.getDeleteButton()).toBeVisible();

    await addRemoveElementPage.removeElement();
    await expect(await addRemoveElementPage.getDeleteButton()).not.toBeVisible();
})

test("Able to add multiple elements", async ({ addRemoveElementPage }) => {
    await addRemoveElementPage.goto();;

    const deleteButtons = addRemoveElementPage.addMultipleButtons(5);
    await expect(await deleteButtons).toHaveCount(5);
});