import {test,expect} from '@playwright/test';
import {loginPage} from '../Pages/loginpage';
import * as testdata from '../testData.json'


test('Sign Up', async ({page}) => {
   await page.goto('https://www.demoblaze.com/index.html');

   const aa=testdata.validUser;

     const LP= new loginPage(page);

    await LP.enterCredentials(aa.username);

});






test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});