import{test,expect}from'@playwright/test';

test.describe("Dialogs Handling",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
    });

    test("Alert Dialog", async({page})=>{
        page.on('dialog', async(dialog)=>{
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am an alert box!');
            await dialog.accept();
        });
        await page.locator("//button[@id='alertBtn']").click();


    });
    test("Confirm Dialog", async({page})=>{
        page.on('dialog', async(dialog)=>{
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toBe('Press a button!');
            //await dialog.dismiss();
            await dialog.accept();
        });
        await page.locator("//button[@id='confirmBtn']").click();

    });

    test("Prompt Dialog", async({page})=>{
        let inputText:string='Playwright User';
          page.on('dialog', async(dialog)=>{
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('Please enter your name:');
            expect(dialog.defaultValue()).toBe("Harry Potter");
            await dialog.accept(inputText);
        });
        await page.locator("//button[@id='promptBtn']").click();
        const resultText = await page.locator("//*[@id='demo']")
        expect(await resultText.textContent()).toBe(`Hello ${inputText}! How are you today?`);
    });

        test("Prompt Dialog Dismiss", async({page})=>{
        let inputText:string='Playwright User';
          page.on('dialog', async(dialog)=>{
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('Please enter your name:');
            expect(dialog.defaultValue()).toBe("Harry Potter");
            await dialog.dismiss();
        });
        await page.locator("//button[@id='promptBtn']").click();
        const resultText = await page.locator("//*[@id='demo']")
        expect(await resultText.textContent()).toBe(`User cancelled the prompt.`);
    });
      
    
});