import{test,expect}from'@playwright/test';

test.describe("Actions Test Automation",()=>{
    test("Hover Action", async({page})=>{
        await page.goto("https://www.amazon.com/");
        const accountList = page.locator("#nav-link-accountList");
        await accountList.hover();
        await page.waitForTimeout(2000); // just for demonstration, not recommended for real tests
        const signInButton = page.locator("//*[text()='Sign in']").nth(0);
        await expect(signInButton).toBeVisible();

    });

    test("Right Click Action", async({page})=>{
        await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
        const rightClickButton = page.locator("//span[text()='right click me']");
        await rightClickButton.click({button : 'right'});
        const editOption = page.locator("//li[@class='context-menu-item context-menu-icon context-menu-icon-edit']");
        await expect(editOption).toBeVisible();
    });

    test("Double Click Action", async({page,context})=>{ // Bu örnek içinde aynı test içinde iki farklı sayfada double click işlemi yapılıyor
        await page.goto("https://demoqa.com/buttons");
        const doubleClickButton = page.locator("#doubleClickBtn");
        await doubleClickButton.dblclick();
        const doubleClickMessage = page.locator("#doubleClickMessage");
        expect(await doubleClickMessage.textContent()).toBe("You have done a double click");
        const page2 = await context.newPage();
        await page2.goto("https://testautomationpractice.blogspot.com/");
        const copyTextButton = page2.locator("//button[text()='Copy Text']");
        await copyTextButton.dblclick();
        await page2.waitForTimeout(2000); // just for demonstration, not recommended for real tests
        const textArea1 = page2.locator("#field1");
        const textArea2 = page2.locator("#field2");
        expect.soft(await textArea2.inputValue()).toBe(await textArea1.inputValue());

    });

    test("Double Click Action - Alternative", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const copyTextButton = page.locator("//button[text()='Copy Text']");
        await copyTextButton.click({clickCount : 2});
        await page.waitForTimeout(2000); // just for demonstration, not recommended for real tests
        const textArea1 = page.locator("#field1");
        const textArea2 = page.locator("#field2");
        expect.soft(await textArea2.inputValue()).toBe(await textArea1.inputValue());
    })

    test("Drag and Drop Action", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const sourceElement = page.locator("#draggable");
        const targetElement = page.locator("#droppable");
        await sourceElement.dragTo(targetElement);
        const dropText:string|null = await targetElement.textContent();
        expect(dropText?.trim()).toBe("Dropped!"); // trim() metodu, metnin başındaki ve sonundaki boşlukları kaldırır
    });

    test("Keyboard Actions", async({page})=>{
        await page.goto("https://www.ebay.com/");
        const searchbox = page.locator("#gh-ac");
        await searchbox.fill("Phone Holder for Bike");
        await page.keyboard.down('Shift');

        for( let i =0; i< 'bike'.length; i++){
            await page.keyboard.press('ArrowLeft');
            await page.waitForTimeout(500);
        }

        await page.keyboard.press('Backspace');
        await page.keyboard.press("C");
        await page.keyboard.press("A");
        await page.keyboard.press("R")

        await page.keyboard.press("Control+A")
        await page.keyboard.press('Backspace');
        await page.waitForTimeout(1000);
    });
});