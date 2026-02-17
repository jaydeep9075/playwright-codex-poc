import type { APIResponse } from '@playwright/test';
import type { AuthCredentials } from '@core/types/custom.types';
import { ApiClient } from '@api/clients/ApiClient';

export class AuthService {
  constructor(private readonly apiClient: ApiClient) {}

  async login(credentials: AuthCredentials): Promise<APIResponse> {
    return this.apiClient.post('/auth/login', credentials);
  }
}
