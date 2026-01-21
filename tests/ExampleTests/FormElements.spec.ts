import{test, expect} from '@playwright/test';
import { count } from 'node:console';


test.describe("Form Elements", () => {

  test.beforeEach(async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
});

  test.skip("Test Box",async ({ page }) => {
    const nameTextBox = page.locator("//*[@id='name']");
    await nameTextBox.fill("Berker");
    await expect(nameTextBox).toHaveValue("Berker");
  });

  test.skip("Radio Button",async ({ page }) => {
    const radioButtonMale = page.locator("//*[@id='male']");
    const radioButtonFemale = page.locator("//*[@id='female']");
    await radioButtonMale.check();
    await expect(radioButtonMale,"Control Radio Button checked").toBeChecked();
    await expect(radioButtonFemale,"Control Radio Button Female does not check").not.toBeChecked();
  });

  test.skip("Checkbox",async ({ page }) => {
    const SundayCheckbox = page.locator("//*[@id='sunday']");
    const MondayCheckbox = page.locator("//*[@id='monday']");
    const TuesdayCheckbox = page.locator("//*[@id='tuesday']");
    const WednesdayCheckbox = page.locator("//*[@id='wednesday']");
    const ThursdayCheckbox = page.locator("//*[@id='thursday']");
    const FridayCheckbox = page.locator("//*[@id='friday']");
    const SaturdayCheckbox = page.locator("//*[@id='saturday']");
    await SundayCheckbox.check();
    const dayArray = [SundayCheckbox, MondayCheckbox, TuesdayCheckbox, WednesdayCheckbox, ThursdayCheckbox, FridayCheckbox, SaturdayCheckbox];
    for (const day of dayArray){
        await day.check();
        await expect(day).toBeChecked();
    }
  });

  test("DropDowns Test",async ({ page }) => {
    const countryDropDown = page.locator("//select[@id='country']");
    await countryDropDown.selectOption("Germany");
    await expect(countryDropDown).toHaveValue("germany");
    await page.waitForTimeout(2000);
    await countryDropDown.selectOption({ value: "canada" });
    await expect(countryDropDown).toHaveValue("canada");
    await page.waitForTimeout(2000);
    await countryDropDown.selectOption({ index: 5 });
    await expect(countryDropDown).toHaveValue("australia");

const countryoptions = page.locator("#country option");
 await expect(countryoptions).toHaveCount(10);
 let status : boolean = false;
const countryArray = page.$$("#country option");

    for(const country of await countryArray){
        let opt = await country.textContent();
        if(opt == "China"){
            status = true;
            break;
        }
  }
    expect(status).toBeTruthy();

});

test("Multi-Select DropDown Test",async ({ page }) => {
  const multiselect = page.locator("//select[@id='colors']");
  await multiselect.selectOption(["Red","Blue","Green"]);
  await expect(multiselect).toHaveValues(["red","blue","green"]);
});
});

test.describe("Dropdown without select tag",()=>{

  test.beforeEach(async({page})=>{
    await page.goto("https://www.arabam.com/ikinci-el?days=1");
    await page.locator("//button[@id='onetrust-accept-btn-handler']").click();
  });

  test("Multi Select Dropdown without select tag",async({page})=>{
    const dropdown = page.locator("//span[text()='İl']")
    await dropdown.click();
    const city1 = page.getByText("İstanbul Avrupa");
    const city2 = page.getByText("İstanbul Anadolu");
    await city1.click();
    await city2.click();
 
  });

  test("Single Select Dropdown without select tag",async({page})=>{
    const dropdown = page.getByText("İlan Sahibi")
    await dropdown.click();
    const dropdownoption = page.locator("//label[@for='membertype-Galeriden']");
    await dropdownoption.click();


  });


  
});