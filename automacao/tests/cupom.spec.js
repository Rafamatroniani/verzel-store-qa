const { test, expect } = require('@playwright/test');

test('CT001 - Aplicar cupom válido', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');

  await page.getByRole('button', { name: /adicionar/i }).first().click();

  await page.getByRole('link', { name: /carrinho/i }).click();

  await page.getByRole('textbox').fill('BEMVINDO10');

  await page.getByRole('button', { name: /aplicar cupom/i }).click();

  await expect(page.getByText('R$ 5,99')).toBeVisible();
});
test('CT002 - Aplicar cupom inexistente', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');

  await page.getByRole('button', { name: /adicionar/i }).first().click();

  await page.getByRole('link', { name: /carrinho/i }).click();

  await page.getByRole('textbox').fill('TESTE123');

  await page.getByRole('button', { name: /aplicar cupom/i }).click();

  await expect(page.getByText('Cupom inválido.')).toBeVisible();
});
test('CT006 - Frete grátis com subtotal de R$ 200', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');

  await page.getByRole('button', { name: /adicionar/i }).nth(4).click();

  await page.getByRole('button', { name: /adicionar/i }).nth(7).click();
  await page.getByRole('button', { name: /adicionar/i }).nth(7).click();

  await page.getByRole('link', { name: /carrinho/i }).click();

  await expect(page.getByText('R$ 200,00')).toBeVisible();
  await expect(page.getByText('R$ 0,00')).toBeVisible();
});
test('CT007 - Frete para subtotal abaixo de R$ 200', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');

  await page.getByRole('button', { name: /adicionar/i }).first().click();

  await page.getByRole('link', { name: /carrinho/i }).click();

  await expect(page.getByText('R$ 19,90')).toBeVisible();
  
});