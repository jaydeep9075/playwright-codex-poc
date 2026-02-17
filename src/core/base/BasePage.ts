import { expect, type Locator, type Page } from '@playwright/test';
import { TIMEOUTS } from '@core/constants/timeouts';
import { logger } from '@utilities/logger';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string): Promise<void> {
    logger.info(`Navigating to: ${path}`, { context: this.constructor.name });
    await this.page.goto(path);
  }

  async click(target: Locator | string): Promise<void> {
    const locator = this.resolveTarget(target);
    await locator.click();
  }

  async fill(target: Locator | string, value: string): Promise<void> {
    const locator = this.resolveTarget(target);
    await locator.fill(value);
  }

  async waitForElement(target: Locator | string, timeout: number = TIMEOUTS.medium): Promise<void> {
    const locator = this.resolveTarget(target);
    await expect(locator).toBeVisible({ timeout });
  }

  async screenshotOnFailure(name: string): Promise<void> {
    await this.page.screenshot({ path: `test-results/${name}.png`, fullPage: true });
  }

  private resolveTarget(target: Locator | string): Locator {
    return typeof target === 'string' ? this.page.locator(target) : target;
  }
}
