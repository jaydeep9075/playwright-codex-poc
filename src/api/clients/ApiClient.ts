import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly baseUrl: string
  ) {}

  async get(path: string): Promise<APIResponse> {
    return this.request.get(`${this.baseUrl}${path}`);
  }

  async post<TPayload extends Record<string, string>>(path: string, payload: TPayload): Promise<APIResponse> {
    return this.request.post(`${this.baseUrl}${path}`, { data: payload });
  }
}
