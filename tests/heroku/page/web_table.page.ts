import { Page, Locator, expect } from "@playwright/test";

export class WebTablePage {
  readonly page: Page;
  readonly tableRows: Locator;
  readonly person: Array<{ fullName: string; due: number }>;

  constructor(page: Page) {
    this.page = page;
    this.tableRows = page.locator("table#table1 tbody tr");
    this.person = [];
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/tables");
    const rowCount = await this.tableRows.count();
    for (let i = 0; i < rowCount; i++) {
      const row = this.tableRows.nth(i);

      const dueText =
        (await row.locator("td:nth-child(4)").textContent()) || "0";
      const due = parseFloat(dueText.replace("$", ""));

      const lastName = (
        (await row.locator("td:nth-child(1)").textContent()) || ""
      ).trim();
      const firstName = (
        (await row.locator("td:nth-child(2)").textContent()) || ""
      ).trim();
      const fullName = `${firstName} ${lastName}`;
      this.person.push({ fullName: fullName, due: due });
    }
  }

  getMaxDuePerson(): Array<string> {
    const maxDue = Math.max(...this.person.map((p) => p.due));
    const maxDuePerson = this.person.filter((p) => p.due === maxDue);
    return maxDuePerson.map((p) => p.fullName);
  }

  getMinDuePerson(): Array<string> {
    const minDue = Math.min(...this.person.map((p) => p.due));
    const minDuePerson = this.person.filter((p) => p.due === minDue);
    return minDuePerson.map((p) => p.fullName);
  }
}
