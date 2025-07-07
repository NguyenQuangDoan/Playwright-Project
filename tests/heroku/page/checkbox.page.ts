import { Page,Locator } from '@playwright/test';

export class CheckboxPage{
    readonly page: Page;
    readonly checkbox: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async check(checkboxNumber: number) {
        await this.page.locator('input[type="checkbox"]').nth(checkboxNumber - 1).check();
    }

    async toBeChecked(checkboxNumber: number) {
       return await this.page.locator('input[type="checkbox"]').nth(checkboxNumber - 1).isChecked();
    }
}