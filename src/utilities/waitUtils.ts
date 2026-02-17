import type { Locator, Page } from '@playwright/test';
import { TIMEOUTS } from '@core/constants/timeouts';

export const waitForVisible = async (
  locator: Locator,
  timeout: number = TIMEOUTS.medium
): Promise<void> => {
  await locator.waitFor({ state: 'visible', timeout });
};

export const waitForUrlContains = async (
  page: Page,
  value: string,
  timeout: number = TIMEOUTS.long
): Promise<void> => {
  await page.waitForURL((url) => url.href.includes(value), { timeout });
};
