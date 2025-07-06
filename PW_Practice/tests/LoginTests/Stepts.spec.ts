import {test,expect} from '@playwright/test'



test('Test 1', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  //drop down
  const countryDropdown = '//select[@id="country"]';
  await page.selectOption(countryDropdown, {value:'Denmark'});


const year ='//select[@placeholder="Year"]';
await page.selectOption(year,{value:'1993'});



// const yearOptions = await page.locator('//select[@placeholder="Year"]/option').allTextContents();
// console.log(yearOptions.length);

//Get length
const yearOptions = await page.$$('//select[@placeholder="Year"]/option');
console.log(yearOptions.length)


//Get all options and print 1 element
const txtoptions= await page.locator('//select[@placeholder="Year"]/option').allTextContents();
console.log(txtoptions[1]);


//Checkbox 
await page.locator('#checkbox1').click();
await page.locator('//input[@value="Male"]').click();


//Mouse hover
await page.getByText('Widgets').hover();

  await page.waitForTimeout(17000);
  
});


test('Test 2', async ({ page }) => {

//const browser:Browser  =await chromium.launch({headless:false,channel:'chrome'});

  await page.goto('http://eaapp.somee.com/Account/Login');

  await page.locator('#UserName').fill("Darshana");
  await page.locator('#Password').fill("Admin_123");


await page.locator('#loginIn').click();

const username= await page.getByRole('link',{name:'Hello Darshana!'});

await expect(username).toHaveText('Hello Darshana!');
  

await page.waitForTimeout(10000);
    
});



test.skip('Frame Handle', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
 

  const frameElementHandle = await page.frameLocator('//iframe[@name="SingleFrame"]');

  await frameElementHandle?.locator('//input').fill("Hello");


  await page.waitForTimeout(10000);
});


test('Nested Frame Handle', async ({ page }) => {
 
  await page.goto('https://ui.vision/demo/webtest/frames');

  const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

  await page.waitForTimeout(5000);

   const childframes=await frame3?.childFrames();

  //await childframes[0].getByRole('radio', { name: 'I am a human' }).click();

  await childframes[0].locator('//span[text()="I am a human"]').click();


  await page.waitForTimeout(10000);
});


