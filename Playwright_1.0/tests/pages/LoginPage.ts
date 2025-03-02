import { Page } from 'playwright';

export class LoginPage {
    private page: Page;
    private usernameInput = '//input[@name=\'username\']';  // Adjust selector
    private passwordInput = '//input[@name=\'password\']';  // Adjust selector
    private submitButton = '//button[text()=\' Login \']';     // Adjust selector

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }

    async isLoginSuccessful(): Promise<boolean> {
        try {
            await this.page.waitForSelector('#dashboard', { timeout: 5000 });  // Adjust selector
            return true;
        } catch {
            return false;
        }
    }
}
