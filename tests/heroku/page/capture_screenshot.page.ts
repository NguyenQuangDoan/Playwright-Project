import { Page,Locator } from '@playwright/test';

export class CaptureScreenshotPage {
    readonly page: Page;
    readonly checkbox: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/context_menu');
    }

    async captureFullScreen() {
        const timestamp = Date.now();
        await this.page.screenshot({ path: `screenshot_fullscreen${timestamp}.png`, fullPage: true });
    }

    async captureViewport() {
        const timestamp = Date.now();
        await this.page.screenshot({ path: `screenshot_viewport${timestamp}.png` });
    }

    async captureElement() {
        const timestamp = Date.now();
        const element = this.page.locator("#hot-spot");
        await element.screenshot({ path: `screenshot_element${timestamp}.png` });
    }
}