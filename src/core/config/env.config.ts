import dotenv from 'dotenv';
import type { FrameworkConfig, SupportedEnv } from '@core/types/custom.types';

dotenv.config();

const supportedEnvironments: SupportedEnv[] = ['dev', 'qa', 'stage', 'prod'];

const resolveEnvironment = (): SupportedEnv => {
  const env = process.env.ENV ?? 'dev';
  if (!supportedEnvironments.includes(env as SupportedEnv)) {
    throw new Error(`Unsupported ENV value: ${env}`);
  }

  return env as SupportedEnv;
};

const asBoolean = (value: string | undefined, fallback: boolean): boolean => {
  if (!value) {
    return fallback;
  }
  return value.toLowerCase() === 'true';
};

export const loadFrameworkConfig = (): FrameworkConfig => ({
  env: resolveEnvironment(),
  baseUrl: process.env.BASE_URL ?? 'https://example.com',
  apiBaseUrl: process.env.API_BASE_URL ?? 'https://example.com/api',
  username: process.env.USERNAME ?? 'demo.user@example.com',
  password: process.env.PASSWORD ?? 'secret',
  invalidPassword: process.env.INVALID_PASSWORD ?? 'wrong-secret',
  headless: asBoolean(process.env.HEADLESS, true)
});
