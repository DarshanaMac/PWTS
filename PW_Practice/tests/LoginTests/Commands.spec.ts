import {Browser, chromium, expect, test} from '@playwright/test';



test('basic test', async ({ page }) => {

//const browser:Browser  =await chromium.launch({headless:false,channel:'chrome'});

  await page.goto('http://eaapp.somee.com/Account/Login');

  await page.locator('#UserName').fill("Darshana");
await page.locator('#Password').fill("Admin_123");


await page.locator('#loginIn').click();

const username= await page.getByRole('link',{name:'Hello Darshana!'});

await expect(username).toHaveText('Hello Darshana!');
  

await page.waitForTimeout(10000);
    
});