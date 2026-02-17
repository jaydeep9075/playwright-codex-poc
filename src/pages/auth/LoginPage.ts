import { expect, type Page } from '@playwright/test';
import { BasePage } from '@core/base/BasePage';
import { ROUTES } from '@core/constants/routes';

export class LoginPage extends BasePage {
  private readonly usernameInput;
  private readonly passwordInput;
  private readonly loginButton;
  private readonly errorBanner;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
    this.errorBanner = page.getByTestId('auth-error');
  }

  async open(): Promise<void> {
    await this.navigate(ROUTES.login);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async assertLoginError(): Promise<void> {
    await this.waitForElement(this.errorBanner);
    await expect(this.errorBanner).toContainText('Invalid username or password');
  }
}
