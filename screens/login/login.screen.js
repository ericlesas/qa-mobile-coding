import BaseScreen from "../base.screen"

class LoginScreen extends BaseScreen {

    // Login - Elements shown to proceed with login.
    get inpUsername() { return $('~test-Username') }
    get inpPassword() { return $('~test-Password') }
    get btnStandardUser() { return $('android=new UiSelector().text("standard_user")') }
    get btnSecretSauce() { return $('android=new UiSelector().text("secret_sauce")') }
    get btnLockedOutUser() { return $('android=new UiSelector().text("locked_out_user")') }
    get btnLogin() { return $('~test-LOGIN') }

    // Error Messages - Feedback messages for login errors.
    set lblErrorMessage(text) { this.label = $(`android=new UiSelector().text("${text}")`) }
    get lblErrorMessage() { return this.label }

    async clickBtnStandardUser() {
        await this.btnStandardUser.click()
    }

    async clickBtnSecretSauce() {
        await this.btnSecretSauce.click()
    }

    async clickBtnLockedOutUser() {
        await this.btnLockedOutUser.click()
    }

    async clickBtnLogin() {
        await this.btnLogin.click()
    }

    async doLoginWithAutoFill() {
        await this.scrollDown()
        await this.clickBtnStandardUser()
        await this.clickBtnSecretSauce()
        await this.clickBtnLogin()
    }

    async doLoginWithLockedOutUser() {
        await this.scrollDown()
        await this.clickBtnLockedOutUser()
        await this.clickBtnLogin()
        await this.scrollUp()
    }

    /**
     * Performs login by filling in the provided username and (optionally) password, 
     * then clicking the login button.
     * @param {string} username - The username to be filled in the login field.
     * @param {string} [password] - (Optional) The password to be filled in the password field.
     */
    async doLoginByFillingFields(username, password) {
        await this.inpUsername.setValue(username);
        if (password != undefined) {
            await this.inpPassword.setValue(password);
        }
        await this.clickBtnLogin();
    }

    async getTextErroMessage(errorMessage) {
        this.lblErrorMessage = errorMessage
        return await this.getTextElement(this.lblErrorMessage)
    }
}

export default new LoginScreen()