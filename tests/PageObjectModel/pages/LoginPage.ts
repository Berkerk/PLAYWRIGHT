import {Page,expect} from '@playwright/test';

export default class LoginPage {
    page : Page;

    constructor(page:Page){
        this.page=page;
    }

    async checkLoginModalVisible(){
        await expect(this.page.locator("//*[@id='logInModalLabel']")).toBeVisible();
    }
    username = () => this.page.locator("#loginusername"); // Element bu şekilde de tanımlabilir.
    async setUsername(username:string){
        await this.username().fill(username);
    }

    async setPassword(password:string){
        await this.page.locator("#loginpassword").fill(password);
    }

    async clickLoginButtonInModal(){
        await this.page.locator("//button[text()='Log in']").click();
    }

    async clickCloseButtonInModal(){
        await this.page.locator("//button[text()='Close']").click();
    }


}