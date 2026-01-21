import{test,expect}from'@playwright/test';


test("Upload File Handling", async({page,context})=>{
    await page.goto("https://demoqa.com/upload-download");

    const uploadInput = page.locator("#uploadFile");
    await uploadInput.setInputFiles("/Users/berkerkucukomuzlu/Downloads/sampleFile.jpeg"); // , İle arka arkaya birden fazla dosya da yüklenebilir.

    const uploadedFilePath = await page.locator("#uploadedFilePath").textContent();
    expect(uploadedFilePath).toContain("sampleFile.jpeg");

  
});

test ("U:pload Multiple Files Handling", async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    const uploadInput = page.locator("#filesToUpload");
    await uploadInput.setInputFiles([
        "/Users/berkerkucukomuzlu/Downloads/sampleFile.jpeg",
        "/Users/berkerkucukomuzlu/Downloads/Screenshot 2026-01-19 at 13.40.32.png"
    ]);

    const uploadedFiles = await page.locator("#fileList").textContent();
    expect(uploadedFiles).toContain("sampleFile.jpeg");
    expect(uploadedFiles).toContain("Screenshot 2026-01-19 at 13.40.32.png");
});

test("Download File Handling", async({page,context})=>{
    await page.goto("https://demoqa.com/upload-download");

    const downloadPromise = page.waitForEvent('download');
    await page.locator("#downloadButton").click();
    const download = await downloadPromise;

    const downloadPath = await download.path();
    console.log("Downloaded file path: " + downloadPath);

    await download.saveAs("/Users/berkerkucukomuzlu/Downloads/downloadedFile.jpeg");

    const fs = require('fs');
    expect(fs.existsSync("/Users/berkerkucukomuzlu/Downloads/downloadedFile.jpeg")).toBeTruthy();
    
});