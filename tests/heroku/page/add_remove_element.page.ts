import { Page, Locator } from "@playwright/test";

export class AddRemoveElementPage {
  readonly page: Page;
  readonly deleteButton: Locator;
  readonly addButton: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deleteButton = page.getByRole("button", { name: "Delete" });
    this.addButton = page.getByRole("button", { name: "Add Element" });
    this.deleteButtons = page.locator("button").filter({ hasText: "Delete" });
  }

  async goto() {
    await this.page.goto(
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );
  }

  async addElement() {
    await this.addButton.click();
  }

  getDeleteButton(): Locator {
    return this.deleteButton;
  }

  async removeElement() {
    return await this.deleteButton.click();
  }

  async addMultipleButtons(deleteButtonNumber: number) {
    for (let i = 0; i < deleteButtonNumber; i++) {
      await this.addButton.click();
    }
    return this.deleteButtons;
  }
}
