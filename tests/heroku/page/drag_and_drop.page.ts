import { Page,Locator } from '@playwright/test';

export class dragAndDropPage {
    readonly page: Page;
    readonly columnB: Locator;
    readonly columnA: Locator;
    readonly columnBHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.columnB = page.locator('#column-b');
        this.columnA = page.locator('#column-a');
        this.columnBHeader = page.locator('#column-b header');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    }

    async dragAndDropElement() {
        await this.columnA.dragTo(this.columnB);
    }

    async getColumnHeader() {
       return await this.columnBHeader;
    }
}