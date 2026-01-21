import {test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
 await page.goto("https://www.demoblaze.com/");
})


test.describe("Ders1 ",()=>{
test('Verify that the Website is accessable',async({page})=>{
  
   await expect(page).toHaveTitle('STORE');
   await expect(page).toHaveURL('https://www.demoblaze.com/')

});
test('Verify that user is able to log in the system with right credentials',async({page})=>{

   await page.click("//a[text()='Log in']");
   // await page.locator("//a[text()='Log in']").click();
   await page.fill("#loginusername","yiper37582@hpari.com");
   //await page.locator("#loginusername").fill("yiper37582@hpari.com");
   await page.fill("#loginpassword","Test12345*");
   //await page.locator("#loginpassword").fill("Test12345*");
   await page.click("//button[text()='Log in']");
  // await page.locator("//button[text()='Log in']").nth(0).click() //Locatorler birden fazla geliyor ise bu şekilde seçtirilebilinir
  await expect(page.locator("//a[@id='logout2']")).toBeVisible();

});

})



