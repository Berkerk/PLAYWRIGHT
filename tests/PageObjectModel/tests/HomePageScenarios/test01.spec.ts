import {test} from '../../fixtures/Fixtures';
import * as data from '../../testdata/Data.json';

test.describe("Home Page Scenarios",()=>{

test("Page Access and Title Verification",{tag: ['@regression','@smoke']}, async({page,homepage})=>{
    
    await homepage.navigateToSite(data.url);
    await homepage.checkHomePageTitle(data.url);
});

test("Login Successful with Valid Credentials",{tag: '@regression'}, async({page,homepage,loginpage})=>{

    await homepage.navigateToSite(data.url);
    await homepage.clickLoginButton();
    await loginpage.checkLoginModalVisible();
    await loginpage.setUsername(data.username);
    await loginpage.setPassword(data.password);
    await loginpage.clickLoginButtonInModal();
    await homepage.checkUserLoggedIn(data.username);
});
});