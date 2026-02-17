import type { LoggerMeta } from '@core/types/custom.types';

type LogLevel = 'INFO' | 'WARN' | 'ERROR';

const formatMessage = (level: LogLevel, message: string, meta?: LoggerMeta): string => {
  const timestamp = new Date().toISOString();
  const context = meta?.context ? `[${meta.context}]` : '[framework]';
  const details = meta?.details ? ` ${JSON.stringify(meta.details)}` : '';

  return `${timestamp} ${level} ${context} ${message}${details}`;
};

export const logger = {
  info: (message: string, meta?: LoggerMeta): void => {
    console.log(formatMessage('INFO', message, meta));
  },
  warn: (message: string, meta?: LoggerMeta): void => {
    console.warn(formatMessage('WARN', message, meta));
  },
  error: (message: string, meta?: LoggerMeta): void => {
    console.error(formatMessage('ERROR', message, meta));
  }
};
