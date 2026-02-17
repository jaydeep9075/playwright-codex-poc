# Enterprise Playwright + TypeScript Framework

A scalable UI + API automation framework built with Playwright and TypeScript, designed for enterprise teams that need clean architecture, CI/CD readiness, and long-term maintainability.

## Architecture Overview

This framework uses a layered architecture:

- **Core layer**: Base abstractions, constants, config loaders, and shared types.
- **Pages layer**: Page Object Model (POM) classes for UI workflows.
- **API layer**: API clients and services for endpoint interactions.
- **Fixtures layer**: Typed dependency injection for tests.
- **Utilities layer**: Logging, wait helpers, and test data generation.
- **Tests layer**: Smoke and regression suites with tag-based filtering.

## Folder Structure

```text
src/
  core/
    base/
      BasePage.ts
      BaseTest.ts
    config/
      env.config.ts
      framework.config.ts
    constants/
      routes.ts
      timeouts.ts
    types/
      custom.types.ts

  pages/
    auth/
      LoginPage.ts
    dashboard/
      DashboardPage.ts

  api/
    clients/
      ApiClient.ts
    services/
      AuthService.ts

  fixtures/
    test.fixture.ts

  utilities/
    logger.ts
    waitUtils.ts
    dataGenerator.ts

  resources/
    testData.json
    users.json

  tests/
    smoke/
      login.smoke.spec.ts
    regression/
      login.regression.spec.ts

playwright.config.ts
tsconfig.json
.eslintrc.js
.prettierrc
.gitignore
README.md
```

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install browsers:

   ```bash
   npx playwright install --with-deps
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

4. Update `.env` values for your target environment.

## Run Commands

- `npm test` → run full suite
- `npm run test:smoke` → run smoke-tagged tests (`@smoke`)
- `npm run test:regression` → run regression-tagged tests (`@regression`)
- `npm run test:headed` → run headed mode
- `npm run lint` → run ESLint
- `npm run typecheck` → run strict TypeScript checks

## Reporting

- **HTML report** is generated under `playwright-report/`.
- **Allure results** are generated under `allure-results/`.

Generate and open Allure report:

```bash
npm run allure:generate
npm run allure:open
```

## CI/CD

The workflow `.github/workflows/playwright.yml`:

- Runs on push and pull requests.
- Installs dependencies and Playwright browsers.
- Executes tests with CI retries.
- Uploads Playwright HTML and Allure artifacts.

## Best Practices

- Keep selectors and actions inside page objects.
- Reuse typed fixtures instead of ad-hoc setup in specs.
- Isolate environment and runtime data in config/resources.
- Use tags (`@smoke`, `@regression`) for targeted pipelines.
- Keep tests deterministic and independent.

## Next-Level Scaling Suggestions (10k+ tests)

- Add a test impact analysis strategy to run only affected tests by changed modules.
- Split suites by domain and execute on dynamic CI matrix shards.
- Introduce contract testing and API mocking for flaky external dependencies.
- Add centralized test data provisioning services for parallel-safe datasets.
- Integrate historical analytics to quarantine flaky tests automatically.
