import { Page, Locator } from "@playwright/test";

export class AddRemoveElementPage {
  readonly page: Page;
  readonly checkbox: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );
  }

  async addElement() {
    await this.page.getByRole("button", { name: "Add Element" }).click();
  }

  async getDeleteButton() {
    return this.page.getByRole("button", { name: "Delete" });
  }

  async removeElement() {
    return await this.page.getByRole("button", { name: "Delete" }).click();
  }

  async addMultipleButtons(deleteButtonNumber: number) {
    for (let i = 0; i < deleteButtonNumber; i++) {
      await this.page.getByRole("button", { name: "Add Element" }).click();
    }
    return this.page.locator("button").filter({ hasText: "Delete" });
  }
}
