import{test,expect}from'@playwright/test';

test.describe("Handling Windows and Tabs",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://demoqa.com/browser-windows");
    });

    test("New Tab Scenario", async({page,context})=>{
        const newTabButton = page.getByText("New Tab");
        await newTabButton.click();

        const textInNewTabPromise = context.waitForEvent('page');
        const newTab = await textInNewTabPromise;
        await newTab.waitForLoadState();

        await page.bringToFront(); // switch back to original page if needed
        await page.waitForTimeout(2000); // just for demonstration, not recommended for real tests
        await newTab.bringToFront(); // switch to new tab
        await newTab.waitForTimeout(2000); // just for demonstration, not recommended for real tests
        const textLocator = newTab.locator("#sampleHeading");
        const textInNewTab = await textLocator.textContent();
        expect(textInNewTab).toBe("This is a sample page");

    });

    test("New Pop-up Scenario", async({page,context})=>{
        const popuppromise = page.waitForEvent('popup');
        await page.locator("//button[@id='windowButton']").click();
        const newpopup = await popuppromise;
        await newpopup.waitForLoadState();
        const newpopuptext = await newpopup.getByText("This is a sample page").textContent();
        await expect(newpopuptext).toBe("This is a sample page");
        await newpopup.close();
    });
    });
    

    