import {Page} from 'playwright';

export class loginPage{
    private page:Page;


    constructor(page:Page){
        this.page=page;
    }


    async enterCredentials(username:String): Promise<void>{

        await this.page.getByRole('link', { name: 'Log in' }).click();
        await this.page.locator('#loginusername').fill("admin");
        
    }


}


