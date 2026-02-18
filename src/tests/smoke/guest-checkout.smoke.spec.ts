import { expect, test } from '@playwright/test';

test.describe('Guest checkout smoke suite @smoke', () => {
  test('should add product to cart and proceed to checkout as guest @smoke', async ({ page }) => {
    await test.step('Open storefront and close popup if visible', async () => {
      await page.goto('https://fsa.devhec.com/?forceHostVariant=SFRA', {
        waitUntil: 'domcontentloaded'
      });

      const closePopupButton = page.getByRole('button', { name: 'Close', exact: true }).first();
      if (await closePopupButton.isVisible()) {
        await closePopupButton.click();
      }

      await page.waitForLoadState('networkidle');
    });

    await test.step('Open navigation and go to best sellers', async () => {
      const toggleNavigationButton = page.getByRole('button', { name: 'Toggle navigation' });
      await expect(toggleNavigationButton).toBeVisible();
      await toggleNavigationButton.click();

      const bestSellersLink = page.locator('#best-sellers');
      await expect(bestSellersLink).toBeVisible();
      await bestSellersLink.click();
      await page.waitForLoadState('networkidle');
    });

    await test.step('Add first product to cart and open cart', async () => {
      const addToCartButton = page.getByRole('button', { name: 'Add To Cart' }).first();
      await expect(addToCartButton).toBeVisible();
      await addToCartButton.click();

      const viewCartLink = page.getByRole('link', { name: 'View Cart' });
      await expect(viewCartLink).toBeVisible();
      await viewCartLink.click();
      await page.waitForLoadState('networkidle');
    });

    await test.step('Continue to checkout', async () => {
      const continueToCheckoutButton = page.getByRole('button', { name: 'Continue to Checkout' });
      await expect(continueToCheckoutButton).toBeVisible();
      await continueToCheckoutButton.click();
      await page.waitForLoadState('networkidle');

      await expect(page).toHaveURL(/checkout/i);
    });
  });
});
