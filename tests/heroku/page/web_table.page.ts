import { Page, Locator, expect } from "@playwright/test";

export class webTablePage {
  readonly page: Page;
  readonly tableRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tableRows = page.locator("table#table1 tbody tr");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/tables");
  }

  async getMaxDuePerson(): Promise<{ fullName: string; maxDue: number }> {

    const rowCount = await this.tableRows.count();
    let maxDue = 0;
    let maxDuePerson = '';

    for (let i = 0; i < rowCount; i++) {
      const row = this.tableRows.nth(i);

      const dueText = await row.locator('td:nth-child(4)').textContent() || '0';
      const due = parseFloat(dueText.replace('$', ''));

      const lastName = (await row.locator('td:nth-child(1)').textContent() || '').trim();
      const firstName = (await row.locator('td:nth-child(2)').textContent() || '').trim();
      const fullName = `${firstName} ${lastName}`;

      if (due > maxDue) {
        maxDue = due;
        maxDuePerson = fullName;
      }
    }

    await expect(maxDue).toBeGreaterThan(0);

    console.log(`Người có Due lớn nhất là: ${maxDuePerson} - $${maxDue}`);
    return { fullName: maxDuePerson, maxDue };
  }


    async getMinDuePerson(): Promise<{ fullName: string; minDue: number }> {
        
        const rowCount = await this.tableRows.count();
        let minDue = Infinity;
        let minDuePerson = '';
    
        for (let i = 0; i < rowCount; i++) {
        const row = this.tableRows.nth(i);
    
        const dueText = await row.locator('td:nth-child(4)').textContent() || '0';
        const due = parseFloat(dueText.replace('$', ''));
    
        const lastName = (await row.locator('td:nth-child(1)').textContent() || '').trim();
        const firstName = (await row.locator('td:nth-child(2)').textContent() || '').trim();
        const fullName = `${firstName} ${lastName}`;
    
        if (due < minDue) {
            minDue = due;
            minDuePerson = fullName;
        }
        }
    
        console.log(`Người có Due nhỏ nhất là: ${minDuePerson} - $${minDue}`);
        return { fullName: minDuePerson, minDue };
    }
}
