import { test as base } from '@playwright/test';
import { logger } from '@utilities/logger';

export const baseTest = base;

baseTest.beforeEach(async ({}, testInfo) => {
  logger.info('Test started', {
    context: 'BaseTest',
    details: { title: testInfo.title }
  });
});

baseTest.afterEach(async ({}, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    logger.error('Test failed', {
      context: 'BaseTest',
      details: {
        title: testInfo.title,
        status: testInfo.status ?? 'unknown'
      }
    });
  }

  logger.info('Test finished', {
    context: 'BaseTest',
    details: { title: testInfo.title }
  });
});
