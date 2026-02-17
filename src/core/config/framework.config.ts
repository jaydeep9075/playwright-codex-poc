import type { FrameworkConfig } from '@core/types/custom.types';
import { loadFrameworkConfig } from '@core/config/env.config';

const frameworkConfig: FrameworkConfig = loadFrameworkConfig();

export default frameworkConfig;
