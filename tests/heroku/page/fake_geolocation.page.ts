import { Page, Locator } from "@playwright/test";

export class fakeGeoLocationPage {
  readonly page: Page;
  readonly button: Locator;
  readonly latValue: Locator;
  readonly longValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.button = page.getByRole('button', { name: 'Where am I?' });
    this.latValue = page.locator('#lat-value'); 
    this.longValue = page.locator('#long-value');
  }

  async setGeoLocation(latitude: number, longitude: number) {
    await this.page.context().setGeolocation({ latitude, longitude });
    await this.page.context().grantPermissions(['geolocation']);
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/geolocation");
  }

  async clickButton() {
    await this.button.click();
  }

  getLatValue(): Locator {
    return this.latValue;
  }

  getLongValue(): Locator {
    return this.longValue;
  }
}
