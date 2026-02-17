import type { APIRequestContext, Locator, Page } from '@playwright/test';

export type SupportedEnv = 'dev' | 'qa' | 'stage' | 'prod';

export interface FrameworkConfig {
  env: SupportedEnv;
  baseUrl: string;
  apiBaseUrl: string;
  username: string;
  password: string;
  invalidPassword: string;
  headless: boolean;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface LoggerMeta {
  context: string;
  details?: Record<string, string | number | boolean>;
}

export interface FixtureContext {
  page: Page;
  request: APIRequestContext;
}

export type UiTarget = Locator | string;
