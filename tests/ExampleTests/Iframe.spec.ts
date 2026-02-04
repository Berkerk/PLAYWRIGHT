import{test,expect}from'@playwright/test';

test.describe("Iframe Handling",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://demoqa.com/frames");
    })
    test("Interact with Iframe", async({page})=>{
        const frame1 = page.frameLocator("//*[@id='frame1']");
        const elementtextframe1 = await frame1.getByText("This is a sample page").textContent()
        expect(elementtextframe1).toBe("This is a sample page");

    });

        test("Interact with Iframe2", async({page})=>{
            const frame1 = page.frame({url : "https://demoqa.com/sample"});

            const elementtext = await frame1?.locator("#sampleHeading").textContent();
            expect(elementtext).toBe("This is a sample page");
    });
})

test.describe.skip("Iframe Test Automation",()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
    });
    
    test.skip("Handle Iframe", async({page})=>{
        const iframeElement = page.frameLocator("#frame-one1434677811");
        const iframeText = await iframeElement?.locator("xpath=//h1").textContent();
        expect(iframeText).toBe("This is a sample page");
    });
});