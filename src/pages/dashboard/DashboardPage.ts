import { expect, type Page } from '@playwright/test';
import { BasePage } from '@core/base/BasePage';

export class DashboardPage extends BasePage {
  private readonly welcomeBanner;

  constructor(page: Page) {
    super(page);
    this.welcomeBanner = page.getByTestId('dashboard-welcome');
  }

  async assertLoaded(): Promise<void> {
    await this.waitForElement(this.welcomeBanner);
    await expect(this.welcomeBanner).toBeVisible();
  }
}
