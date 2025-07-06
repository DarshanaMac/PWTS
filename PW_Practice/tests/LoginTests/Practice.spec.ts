import {test} from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

    await page.getByRole('textbox', { name: 'First Name' }).fill('sdsds');

    await page.getByText('Male', { exact: true }).click();

    const status= await page.getByText('Male', { exact: true }).isChecked();
    console.log("*******   "+status);


    const optionSkills="//select[@ng-model='Skill']";

    await page.selectOption(optionSkills,{value:'AutoCAD'});


    await page.locator('//a[text()="SwitchTo"]').hover();

    

    await page.waitForTimeout(6000);
 
});


test('basic test1', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

    await page.getByRole('textbox', { name: 'First Name' }).fill('sdsds');

    await page.getByText('Male', { exact: true }).click();


    const optionSkills="//select[@ng-model='Skill']";

    await page.selectOption(optionSkills,{value:'AutoCAD'});


    await page.locator('//a[text()="SwitchTo"]').hover();

    

    await page.waitForTimeout(6000);
 
});