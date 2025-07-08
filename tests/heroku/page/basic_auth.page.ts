import { Page,Locator } from '@playwright/test';

export class BasicAuthPage{
    readonly page: Page;
    readonly headingLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headingLocator = page.locator('h3');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/basic_auth');
    }

    async heading() {
        return this.headingLocator.textContent();
    }
}