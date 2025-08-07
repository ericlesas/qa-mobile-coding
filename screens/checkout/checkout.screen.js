import BaseScreen from "../base.screen"

class CheckoutScreen extends BaseScreen {

    // Checkout Form — Input fields for user information
    get inpFirstName() { return $('~test-First Name') }
    get inpLastName() { return $('~test-Last Name') }
    get inpZipCode() { return $('~test-Zip/Postal Code') }

    // Checkout Confirmation — Buttons shown to proced with the purchase
    get btnContinue() { return $('~test-CONTINUE') }
    get btnFinish() { return $('~test-FINISH') }

    // Checkout Complete — Elements shown on the purchase success screen
    get lblSuccessTitle() { return $('android=new UiSelector().text("THANK YOU FOR YOU ORDER")') }
    get lblSuccessDescription() { return $('android=new UiSelector().text("Your order has been dispatched, and will arrive just as fast as the pony can get there!")') }
    get imgCheckoutComplete() { return $('//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]//android.widget.ImageView') }
    get btnBackHome() { return $('~test-BACK HOME') }

    /**
     * Fills in the checkout form fields and completes the purchase flow.
     * @param {string} name - User's first name.
     * @param {string} lastName - User's last name.
     * @param {string} code - ZIP/postal code.
     */
    async fillFormFieldsAndCompleteThePurchase(name, lastName, code) {
        await this.inpFirstName.setValue(name)
        await this.inpLastName.setValue(lastName)
        await this.inpZipCode.setValue(code)
        await this.btnContinue.click()
        await this.clickBtnFinish()
    }

    async clickBtnFinish() {
        await this.sleep()
        await this.scrollDown()
        await this.btnFinish.click()
    }

    async getTextLblSuccessTitle() {
        return await this.getTextElement(this.lblSuccessTitle)
    }

    async getTextLblSuccessDescription() {
        return await this.getTextElement(this.lblSuccessDescription)
    }

    async isDisplayedImgCheckoutComplete() {
        return await this.imgCheckoutComplete.isDisplayed()
    }

    async isDisplayedBtnBackHome() {
        return await this.btnBackHome.isDisplayed()
    }
}

export default new CheckoutScreen()