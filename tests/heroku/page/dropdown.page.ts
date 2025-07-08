import { Page,Locator } from '@playwright/test';

export class dropdownPage {
    readonly page: Page;
    readonly dropdownLocator: Locator;
    readonly fruitsDropdownLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdownLocator = page.locator("#dropdown");
        this.fruitsDropdownLocator = page.locator("#fruits");
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectOption() {
        await this.dropdownLocator.selectOption({label: 'Option 1'});
    }

    async dropdown() {
       return await this.dropdownLocator;
    }

    async gotoMultipleOptions() {
        await this.page.goto("https://output.jsbin.com/osebed/2");
    }

    async selectMultipleOptions(fruits: string[]): Promise<void> {
        await this.fruitsDropdownLocator.selectOption(fruits);
    }

    async fruitsDropdown() {
        return await this.fruitsDropdownLocator;
    }

    async deselectAllOptions() {
        await this.page.locator("#fruits").selectOption([]);
        return await this.fruitsDropdownLocator;
    }
}