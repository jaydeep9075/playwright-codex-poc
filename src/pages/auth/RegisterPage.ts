import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@core/base/BasePage';
import { ROUTES } from '@core/constants/routes';

export class RegisterPage extends BasePage {
  private readonly closeButton: Locator;
  private readonly closeUppercaseButton: Locator;
  private readonly menuPopoverTrigger: Locator;
  private readonly loginToAccountButton: Locator;
  private readonly createAccountLink: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly confirmPasswordInput: Locator;
  private readonly termsCheckbox: Locator;
  private readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.closeButton = page.getByRole('button', { name: 'Close', exact: true });
    this.closeUppercaseButton = page.getByRole('button', { name: 'CLOSE' });
    this.menuPopoverTrigger = page.getByTestId('popover-deprecated-PopoverTrigger');
    this.loginToAccountButton = page.getByRole('button', { name: 'Login to your account' });
    this.createAccountLink = page.getByRole('link', { name: 'Create Account' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password' });
    this.termsCheckbox = page.getByRole('checkbox', { name: 'By entering my phone number,' });
    this.createAccountButton = page.getByTestId('createAccountForm-Button');
  }

  async open(): Promise<void> {
    await this.navigate(ROUTES.home);
  }

  async closeInitialPopups(): Promise<void> {
    if (await this.closeButton.isVisible()) {
      await this.click(this.closeButton);
    }

    if (await this.closeUppercaseButton.isVisible()) {
      await this.click(this.closeUppercaseButton);
    }
  }

  async hoverMenu(): Promise<void> {
    await this.waitForElement(this.menuPopoverTrigger);
    await this.menuPopoverTrigger.hover();
  }

  async clickLoginButton(): Promise<void> {
    await this.waitForElement(this.loginToAccountButton);
    await this.click(this.loginToAccountButton);
  }

  async openCreateAccount(): Promise<void> {
    await this.hoverMenu();
    await this.waitForElement(this.createAccountLink);
    await this.click(this.createAccountLink);
  }

  async register(email: string, password: string): Promise<void> {
    await this.waitForElement(this.emailInput);
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.fill(this.confirmPasswordInput, password);

    await this.waitForElement(this.termsCheckbox);
    await this.click(this.termsCheckbox);

    await this.waitForElement(this.createAccountButton);
    await this.click(this.createAccountButton);
  }
}
