import{test,expect}from'@playwright/test';

test.describe.skip("Hard Assertions Examples",()=>{
test("Hard Assertions Demo toBeAttached", async({page})=>{
    await page.goto("https://www.demoblaze.com/");

    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
   // await expect(page.getByText("Place Order").nth(1)).toBeAttached(); // açık sayfa üzerinde bu elementin var olduğunu doğrular
    await expect(page.getByText("Place Order").nth(1)).not.toBeAttached();


});

test("Hard Assertions Demo toBeCheck", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxGender = page.locator("//*[@id='male']");
    await checkboxGender.check();
    //await expect(page.locator("//*[@id='male']")).not.toBeChecked(); // burada bir checkbox in işaretli olmadığını doğruluyoruz
    await expect(checkboxGender).toBeChecked();
    
    
});

test("Hard Assertions Demo ToBeDisabled", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const nameTextBox = page.locator("//*[@id='name']");
    await nameTextBox.fill("Test");
   // await expect(nameTextBox).toBeDisabled(); // burada bir alanın disabled olduğunu doğruluyoruz
    await expect(nameTextBox).toBeEnabled(); // burada bir alanın Enabled olduğunu doğruluyoruz.
});

test("Hard Assertions Demo ToBeFocused", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const emailTextBox = page.locator("//*[@id='email']");
    const nameTextBox = page.locator("//*[@id='name']");
    await emailTextBox.click();
    await expect(emailTextBox).toBeFocused(); // burada bir alanın focus olduğunu doğruluyoruz.
});

test("HardAssertions Demo toBeEmpty", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const emailTextBox = page.locator("//*[@id='email']");
    const nameTextBox = page.locator("//*[@id='name']");
    await expect(emailTextBox).toBeEmpty(); // burada bir alanın boş olduğunu doğruluyoruz.
    await expect(nameTextBox).toBeEmpty(); // burada bir alanın boş olmadığını doğruluyoruz.
    await nameTextBox.fill("Test");
    await expect(nameTextBox).not.toBeEmpty(); // burada bir alanın boş olmadığını doğruluyoruz.
});

test("Hard Assertions Demo toBeInViewport", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const homeLink = page.locator("//a[text()='Home']").nth(0);
    const homelink1 = page.locator("//a[text()='Home']").nth(1);
    await expect(homeLink).toBeInViewport(); // burada bir elementin görünür olduğunu doğruluyoruz.
    await expect(homelink1).not.toBeInViewport(); // burada bir elementin görünür olmadığını doğruluyoruz.
});

test("Hard Assertions Demo toHaveCount", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page.getByText("Mouse Hover")).not.toContainText("Berker");// burada bir elementin textinin belirli bir metni içerdiğini doğruluyoruz.
    await expect(page.getByText("Mouse Hover")).toHaveText("Mouse Hover"); // bir metnin tamanını içeriyor mu diye kontrol ediyoruz. 
});

test("Hard assertions Demo ToHaveValue", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const nameTextBox = page.locator("//*[@id='name']");
    await nameTextBox.fill("Test");
    await expect(nameTextBox).toHaveValue("Test"); // burada bir alanın belirli bir değere sahip olduğunu doğruluyoruz.
    await expect(nameTextBox).not.toHaveValue("Deneme"); // burada bir alanın belirli bir değere sahip olmadığını doğruluyoruz.
});

});

test.describe.skip("Generic Assertions Examples",()=>{
    test("Generic Assertions Demo - toBe", async({page})=>{
        let value1 = 10;
        let value2 = 10;
        expect(value1).toBe(10); // burada iki değerin birbirine eşit olduğunu doğruluyoruz.

        let str1 = "Playwright";
        let str2 = "Playwright";
        expect(str1).toBe(str2); // burada iki stringin birbirine eşit olduğunu doğruluyoruz.

        expect(0.1 + 0.2).toBeCloseTo(0.3); // burada iki sayının birbirine eşit olduğunu doğruluyoruz.

        const obj1 ={
            prop : 2,
            prop2 : 3
        };

        const obj2 ={
            prop : 2,
            prop2 : 3
        }
        expect(obj1).toEqual(obj2);
        expect(obj1.prop).toBe(obj2.prop);
        //expect(obj1).toBe(obj2); // burada iki nesnenin birbirine eşit olduğunu doğruluyoruz.
        let str3: string;
        str3 = "Hello World";
        expect(str3).toContain("World"); // burada bir stringin belirli bir metni içerdiğini doğruluyoruz.

        const array1 = [1,2,3,4,5];
        expect(array1).toContain(5); // burada bir dizinin belirli bir değeri içerdiğini doğruluyoruz.

        const array2 = [{prop1:1}, {prop2:2}, {prop3:3}];
        expect(array2).toContainEqual({prop2:2}); // burada bir dizinin belirli bir nesneyi içerdiğini doğruluyoruz.
        //expect(array2).toContain({prop2:2});

        let status = true;
        expect(status).toBeTruthy(); // burada bir değerin true olduğunu doğruluyoruz.
        expect(!status).toBeFalsy(); // burada bir değerin false olduğunu doğruluyoruz.

    });

});

test.describe("Soft Assertions Examples",()=>{
test("Soft Assertions Demo toBeCheck", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxGender = page.locator("//*[@id='male']");
    await checkboxGender.check();
    await expect.soft(page.locator("//*[@id='male']"),"Kontrol 1").not.toBeChecked(); // burada bir checkbox in işaretli olmadığını doğruluyoruz
    await expect.soft(page.locator("//*[@id='female']"),"Kontrol 2").toBeChecked(); // burada bir checkbox in işaretli olduğunu doğruluyoruz
    
});
});