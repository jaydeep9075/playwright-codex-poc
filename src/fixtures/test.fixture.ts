import { expect } from '@playwright/test';
import { baseTest } from '@core/base/BaseTest';
import frameworkConfig from '@core/config/framework.config';
import { ApiClient } from '@api/clients/ApiClient';
import { AuthService } from '@api/services/AuthService';
import { LoginPage } from '@pages/auth/LoginPage';
import { DashboardPage } from '@pages/dashboard/DashboardPage';

type CustomFixtures = {
  config: typeof frameworkConfig;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  apiClient: ApiClient;
  authService: AuthService;
};

export const test = baseTest.extend<CustomFixtures>({
  config: async ({}, use) => {
    await use(frameworkConfig);
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  apiClient: async ({ request, config }, use) => {
    await use(new ApiClient(request, config.apiBaseUrl));
  },
  authService: async ({ apiClient }, use) => {
    await use(new AuthService(apiClient));
  }
});

export { expect };
