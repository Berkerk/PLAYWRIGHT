import{test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
 await page.goto("https://www.demoblaze.com/");
})

test("Builtin Locators Demo", async({page})=>{
    // Using Builtin Locators
    await page.getByRole('link',{ name: 'Log in' }).click();
    await expect(page.getByAltText('First slide')).toBeVisible();
    await page.fill("//*[@id='loginusername']","yiper37582@hpari.com")
  //  await page.getByLabel('Password:').fill('Test12345*');
});