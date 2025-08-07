import BaseScreen from "../base.screen"

class CartScreen extends BaseScreen {

    get btnCheckout() { return $('~test-CHECKOUT') }

    async clickBtnCheckout() {
        await this.btnCheckout.click()
    }
}

export default new CartScreen()