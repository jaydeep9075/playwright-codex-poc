import users from '@resources/users.json';
import testData from '@resources/testData.json';
import { test } from '@fixtures/test.fixture';

test.describe('Authentication regression suite @regression', () => {
  test('should reject invalid credentials @regression', async ({ loginPage }) => {
    await test.step(testData.loginScenarios.negative.description, async () => {
      await loginPage.open();
      await loginPage.login(users.invalidUser.username, users.invalidUser.password);
      await loginPage.assertLoginError();
    });
  });
});
