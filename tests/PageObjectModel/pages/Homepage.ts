import {Page,expect} from '@playwright/test';

export default class Homepage {
    page : Page;

    constructor(page:Page){
        this.page=page;
    }

    async navigateToSite(url:string){
        await this.page.goto(url);
    }

    async checkHomePageTitle(url:string){
        expect(url).toBe(this.page.url());
    }
    async clickOnLaptopsCategory(){
        await this.page.locator("//a[text()='Laptops']").click();
    }

    async clickLoginButton(){
        await this.page.locator("#login2").click();
    }
    
    async checkUserLoggedIn(username:string){
        const loggedInUser = this.page.locator("#nameofuser");
        await expect(loggedInUser).toHaveText(`Welcome ${username}`);
    }
}