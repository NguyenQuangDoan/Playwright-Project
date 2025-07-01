import{test, expect} from '@playwright/test';


test("Validate largest due person from table", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");
    
    const rows = page.locator("table#table1 tbody tr");

    const rowCount = await rows.count();
    let maxDue = 0;
    let maxDuePerson = '';

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const dueText = await row.locator("td:nth-child(4)").textContent();
        const due = parseFloat((dueText || '0').replace('$', ''));

        const lastName = (await row.locator("td:nth-child(1)").textContent() || '').trim();
        const firstName = (await row.locator("td:nth-child(2)").textContent() || '').trim();
        const fullName = `${firstName} ${lastName}`;

        if(due > maxDue){
            maxDue = due;
            maxDuePerson = fullName;
        }
    }

    console.log(`Người có Due lớn nhất là: ${maxDuePerson} - $${maxDue}`);
    expect(maxDue).toBeGreaterThan(0);
});

test("Validate smallest due person from table", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");

    const rows = page.locator("table#table1 tbody tr");
    const rowCount = await rows.count();

    let minDue = 0;
    let minDuePerson: string[] = [];

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const dueText = await row.locator("td:nth-child(4)").textContent();
        const due = parseFloat((dueText || '0').replace('$', ''));

        const lastName = (await row.locator("td:nth-child(1)").textContent() || '').trim();
        const firstName = (await row.locator("td:nth-child(2)").textContent() || '').trim();
        const fullName = `${firstName} ${lastName}`;

        if (i === 0 || due < minDue) {
            minDue = due;
            minDuePerson = [fullName];
        } else if (due === minDue) {
            minDuePerson.push(fullName);
        }
    }

    console.log(`Người có Due nhỏ nhất là: ${minDuePerson.join(', ')} - $${minDue}`);
    expect(minDuePerson).toEqual(["John Smith", "Tim Conway"]);
});
