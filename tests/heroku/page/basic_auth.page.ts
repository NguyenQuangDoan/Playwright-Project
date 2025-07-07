import { Page,Locator } from '@playwright/test';

export class BasicAuthPage{
    readonly page: Page;
    readonly checkbox: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/basic_auth');
    }

    async heading() {
        return this.page.locator('h3').textContent();
    }
}