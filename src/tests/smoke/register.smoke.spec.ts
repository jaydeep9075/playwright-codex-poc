import users from '@resources/users.json';
import { test } from '@fixtures/test.fixture';

test.describe('Registration smoke suite @smoke', () => {
  test('should open create account flow and submit registration form @smoke', async ({ registerPage }) => {
    await registerPage.open();
    await registerPage.closeInitialPopups();
    await registerPage.clickLoginButton();
    await registerPage.openCreateAccount();
    await registerPage.register(users.registerUser.email, users.registerUser.password);
  });
});
