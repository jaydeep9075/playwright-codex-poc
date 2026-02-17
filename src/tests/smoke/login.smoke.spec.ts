import users from '@resources/users.json';
import testData from '@resources/testData.json';
import { test } from '@fixtures/test.fixture';

test.describe('Authentication smoke suite @smoke', () => {
  test('should login with valid credentials @smoke', async ({ loginPage, dashboardPage }) => {
    await test.step(testData.loginScenarios.positive.description, async () => {
      await loginPage.open();
      await loginPage.login(users.validUser.username, users.validUser.password);
      await dashboardPage.assertLoaded();
    });
  });
});
