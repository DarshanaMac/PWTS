import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import * as testData from './testData.json';  // Import JSON data


test('First Test- Playwright', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Use test data from the JSON file
    const validUser = testData.validUser;

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await loginPage.login(validUser.username, validUser.password);

    // const success = await loginPage.isLoginSuccessful();
    // expect(success).toBe(true);
});

